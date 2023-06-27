from fastapi import FastAPI
from routes.main import main

app = FastAPI()
app.include_router(main)