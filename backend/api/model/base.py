from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

# BaseClass
Base = declarative_base()

Engine = create_engine(
    "mysql+mysqlconnector://root:root@sql:3306/mypy")

session_maker = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=Engine
)
Session = session_maker()
