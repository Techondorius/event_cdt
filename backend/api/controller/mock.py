from fastapi import APIRouter

app = APIRouter()


@app.get("/mock")
def mock() -> dict[str, str]:
    return {
        "Hello": "World",
        "from": "mock.py"
    }
