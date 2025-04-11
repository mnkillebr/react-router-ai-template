from typing import Set

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    # For an async SQLAlchemy engine with asyncpg, note the prefix "postgresql+asyncpg"
    API_V1_STR: str = "/api/v1"

    #Database
    DATABASE_URL: str = Field(..., env="DATABASE_URL")
    TEST_DATABASE_URL: str = Field(..., env="TEST_DATABASE_URL")
    EXPIRE_ON_COMMIT: bool = False

    # Auth
    JWT_SECRET: str = Field(..., env="JWT_SECRET")
    JWT_ALGORITHM: str = Field("HS256", env="JWT_ALGORITHM")
    JWT_LIFETIME_SECONDS: int = Field(3600, env="JWT_LIFETIME_SECONDS")

    # Alembic
    ALEMBIC_LOCAL: str = Field(..., env="ALEMBIC_LOCAL")

    # Google OAuth
    # GOOGLE_OAUTH_CLIENT_ID: str = Field(..., env="GOOGLE_OAUTH_CLIENT_ID")
    # GOOGLE_OAUTH_CLIENT_SECRET: str = Field(..., env="GOOGLE_OAUTH_CLIENT_SECRET")  

    # CORS
    CORS_ORIGINS: Set[str] = Field(..., env="CORS_ORIGINS")

    model_config = SettingsConfigDict(
        env_file=".env",
        env_ignore_empty=True,
        extra="ignore",
    )

settings = Settings()