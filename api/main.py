import fastapi
from fastapi.middleware.cors import CORSMiddleware

from schemas import Item

app = fastapi.FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Hello World"}


@app.get("/items")
def items() -> list[Item]:
    return [
        Item(name="Item 1", price=9.99),
        Item(name="Item 2", price=19.99, stocked=True),
    ]