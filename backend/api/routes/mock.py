from fastapi import APIRouter
from schema.events import Single_Event

app = APIRouter()


@app.get("/mock", response_model=Single_Event)
def mock() -> Single_Event:
    return Single_Event(
        id=8, name="ライブ", date="2023-10-10T23:45:00+09:00", deleted_at=None
    )
