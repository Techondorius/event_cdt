from fastapi import APIRouter
from schema.events import Single_Event

app = APIRouter()


@app.get("/mock", response_model=Single_Event)
def mock() -> Single_Event:
    res: Single_Event = Single_Event(
        id=1, name="ライヴ", date="2023-10-10T23:45:00+09:00", deleted_at=None)
    return res
