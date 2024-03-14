from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],  
    )

@app.get("/")
async def root():
    return {"message": "Hello from server"}

@app.post("/add")
async def addNumbers(num1: int = Form(...), num2: int = Form(...)):
    result = num1 + num2
    return {"result": result}

@app.post("/subtract")
async def subtractNumbers(num1: int = Form(...), num2: int = Form(...)):
    result = num1 - num2
    return {"result": result}