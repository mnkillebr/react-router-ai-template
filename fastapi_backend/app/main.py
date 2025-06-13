from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select
from copilotkit.integrations.fastapi import add_fastapi_endpoint
from copilotkit import CopilotKitRemoteEndpoint, Action

from app.core.db import create_db_and_tables, get_async_session
from app.models.user import User, UserCreate, UserRead, UserUpdate
from app.routers.users import (
    auth_backend,
    current_active_user,
    fastapi_users,
)
from app.core.config import settings

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Not needed if you setup a migration system like Alembic
    await create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


def hello_world():
    return "Hello, world!"

# CopilotKit
sdk = CopilotKitRemoteEndpoint(
    actions=lambda context: [
        Action(
            name="hello_world",
            handler=hello_world,
            description="Say hello to the world",
            parameters=None
        ),
    ]
)

add_fastapi_endpoint(app, sdk, "/copilotkit")

app.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
)
app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)


@app.get("/authenticated-route")
async def authenticated_route(user: User = Depends(current_active_user)):
    return {"message": f"Hello {user.email}!"}

@app.get("/users/email/{email}", response_model=UserRead, response_model_exclude={"is_superuser", "is_verified", "is_active"})
async def read_user_by_email(email: str, session: AsyncSession = Depends(get_async_session)):
    query = select(User).where(User.email == email)
    result = await session.execute(query)
    user = result.scalar()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.get("/")
async def root():
    return {"message": "Welcome to the FastAPI server"}