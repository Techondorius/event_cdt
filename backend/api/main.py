from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import create_tables
from routes.mock import app as mock_routes
from routes.events import app as event_routes

app = FastAPI()

origins: list[str] = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root() -> dict[str, str]:
    return {"Hello": "World"}


app.include_router(mock_routes)
app.include_router(event_routes)
create_tables()
