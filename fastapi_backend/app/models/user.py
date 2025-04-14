import uuid
from typing import Optional

from fastapi_users import schemas
from fastapi_users.db import (
    SQLAlchemyBaseOAuthAccountTableUUID,
    SQLAlchemyBaseUserTableUUID,
)
from sqlalchemy.orm import Mapped, relationship, mapped_column
from sqlalchemy import String

from app.models.base import Base


class OAuthAccount(SQLAlchemyBaseOAuthAccountTableUUID, Base):
    pass


class User(SQLAlchemyBaseUserTableUUID, Base):
    oauth_accounts: Mapped[list[OAuthAccount]] = relationship(
        "OAuthAccount", lazy="joined"
    )
    full_name: Mapped[str] = mapped_column(String(length=255), nullable=False)


class UserRead(schemas.BaseUser[uuid.UUID]):
    full_name: str
    # pass


class UserCreate(schemas.BaseUserCreate):
    full_name: str
    # pass


class UserUpdate(schemas.BaseUserUpdate): 
    full_name: Optional[str] = None
    # pass