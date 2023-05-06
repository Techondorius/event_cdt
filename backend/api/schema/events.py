from pydantic import BaseModel


class Single_Event(BaseModel):
    id: int
    name: str
    date: str
    deleted_at: str | None
