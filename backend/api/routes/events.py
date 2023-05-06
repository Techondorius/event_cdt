from fastapi import APIRouter
from model.events import Event
import typing
import datetime
from schema.events import Single_Event

app = APIRouter()


@app.post("/events", response_model=Single_Event)
# リクエストのdateはtimezoneが指定されない限りJSTとして扱われる
# レスポンスのdateはMySQLコンテナの環境変数(TZ)のタイムゾーンであるが、それは明記されない
def create_event() -> dict[str, typing.Any]:
    event = Event(name="ライブ", date="2023-10-10T23:45:00+09:00")
    event.insert()
    return event.to_res_schema()
