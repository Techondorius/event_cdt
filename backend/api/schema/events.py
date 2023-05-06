from pydantic import BaseModel


class Single_Event(BaseModel):
    id: int
    name: str
    date: str   # timezone付きのdatetime(例:"2023-10-10T23:45:00+0900")
    deleted_at: str | None
