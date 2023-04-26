from fastapi import FastAPI
from controller.mock import app as routes

app = FastAPI()


@app.get("/")
def read_root() -> dict[str, str]:
    return {"Hello": "World"}


app.include_router(routes)
