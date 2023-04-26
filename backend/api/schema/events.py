from pydantic import BaseModel


class Single_Event(BaseModel):
    id: int
    date: str
    title: str
