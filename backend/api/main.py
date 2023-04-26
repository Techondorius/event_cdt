from fastapi import FastAPI
from routes.mock import app as routes
from fastapi.middleware.cors import CORSMiddleware

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


app.include_router(routes)
