from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column
from sqlalchemy import DateTime
from model.base import Base, Session
from schema.events import Single_Event


class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False)
    date = Column(DateTime(timezone=True), nullable=False)
    deleted_at = Column(DateTime(timezone=True), nullable=True)

    def insert(self) -> None:
        print(self.date)
        Session.add(self)
        Session.commit()

    def to_res_schema(self):
        return Single_Event(
            id=self.id,
            name=self.name,
            date=self.date.strftime('%Y-%m-%dT%H:%M:%S%z')+"+09:00",
            deleted_at=self.deleted_at.strftime('%Y-%m-%dT%H:%M:%S%z')+"+09:00"
            if self.deleted_at else None
        )
