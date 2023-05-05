from fastapi import APIRouter
from model.events import Event
import typing

app = APIRouter()


@app.post("/events")
def create_event() -> dict[str, typing.Any]:
    event = Event(name="ライブ", date="2023-10-10T23:45:00")
    print(event.date, type(event.date))
    event.insert()
    return event.to_dict()
