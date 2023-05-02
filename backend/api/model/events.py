from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column
from sqlalchemy import DateTime
from model.base import Base, Session
import typing


class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False)
    date = Column(DateTime, nullable=False)
    deleted_at = Column(DateTime, nullable=True)

    def insert(self) -> None:
        Session.add(self)
        Session.commit()

    def to_dict(self) -> dict[str, typing.Any]:
        print(self.date.strftime('%Y-%m-%dT%H:%M:%S'))
        return {
            "id": self.id,
            "name": str(self.name),
            "date": self.date.strftime('%Y-%m-%dT%H:%M:%S'),
            "deleted_at": self.deleted_at.strftime('%Y-%m-%dT%H:%M:%S')
            if self.deleted_at else None
        }
