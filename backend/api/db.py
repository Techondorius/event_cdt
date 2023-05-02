from sqlalchemy.orm import sessionmaker, Session
from model.base import Base, Engine


def create_tables() -> None:
    Base.metadata.create_all(Engine)


def create_db_session() -> Session:
    SessionClass = sessionmaker(Engine)  # セッションを作るクラスを作成
    session = SessionClass()
    return session
