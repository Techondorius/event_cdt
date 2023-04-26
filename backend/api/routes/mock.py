from fastapi import APIRouter
from schema.events import Single_Event

app = APIRouter()


@app.get("/mock", response_model=Single_Event)
def mock() -> Single_Event:
    res: Single_Event = Single_Event(id=1, title="ライブ", date="2023-10-10")
    return res
