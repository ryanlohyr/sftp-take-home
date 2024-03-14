from fastapi.testclient import TestClient

from src.main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello from server"}
    
def test_add_invalid_type():
    # Arrange
    num1 = "Hi"
    num2 = "5"

    # Act
    response = client.post("/add", data={"num1": num1, "num2": num2})

    # Assert
    assert response.status_code == 422
    assert response.json()["detail"][0]["msg"] == "Input should be a valid integer, unable to parse string as an integer"

def test_add_numbers():
    # Arrange
    num1 = 5
    num2 = 10

    # Act
    response = client.post("/add", data={"num1": num1, "num2": num2})

    # Assert
    assert response.status_code == 200
    assert response.json() == {"result": num1 + num2}
    
    
def test_subtract_numbers():
    # Arrange
    num1 = 10
    num2 = 5

    # Act
    response = client.post("/subtract", data={"num1": num1, "num2": num2})

    # Assert
    assert response.status_code == 200
    assert response.json() == {"result": num1 - num2}
    
# Boundary value analysis
def test_add_boundary_values():
    # Arrange
    num1 = 0
    num2 = 0

    # Act
    response = client.post("/add", data={"num1": num1, "num2": num2})

    # Assert
    assert response.status_code == 200
    assert response.json() == {"result": num1 + num2}

def test_subtract_boundary_values():
    # Arrange
    num1 = 0
    num2 = 0

    # Act
    response = client.post("/subtract", data={"num1": num1, "num2": num2})

    # Assert
    assert response.status_code == 200
    assert response.json() == {"result": num1 - num2}