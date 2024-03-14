# sftp-take-home
### Setting up Frontend
1. **Navigate to Frontend folder**
    ```bash
    cd frontend
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Run Development Server:**
    ```bash
    npm run dev
    ```

### Setting up Backend

1. **Navigate into Backend folder**
    ```bash
    cd backend
    ```
3. **Create a Virtual Environment:**
    ```bash
    python3 -m venv venv
    ```

4. **Activate the Virtual Environment:**
    - **On Linux/Mac:**
        ```bash
        source venv/bin/activate
        ```
    - **On Windows:**
        ```bash
        venv\Scripts\activate
        ```

5. **Install Python Dependencies:**
    ```bash
    pip3 install -r requirements.txt
    ```

6. **Make start.sh Executable:**
    ```bash
    chmod +x start.sh
    ```

7. **Run the Application:**
    ```bash
    ./start.sh
    ```

### Running Test Cases
1. **Ensure the Virtual Environment is Activated (if not already):**
    - **On Linux/Mac:**
        ```bash
        source venv/bin/activate
        ```
    - **On Windows:**
        ```bash
        venv\Scripts\activate
        ```

2. **Run Test Cases:**
    ```bash
    ./test.sh
    ```


# Task 
**Requirements:**

Task:  Implement a simple web application that can perform simple calculations.

_____________________________________________________________________________________

- **Frontend:**
- Create a single page web application that displays 2 number input fields, an "Add" button and a "Subtract" button.
- When you fill up the 2 input fields and click the "Add" button, your application will send a POST request to your server, which will reply with the addition of the 2 numbers. You will display the result in your webpage.
- When you fill up the 2 input fields and click the "Subtract" button, your application will send a POST request to your server, which will reply with the subtraction of the 2 numbers. You will display the result in your webpage.
- If any of the 2 input fields are blank, just treat the input value as 0 and still trigger the request to the server, displaying the result in your webpage.

Notes:

- You do not need to style your application with any CSS.
- You may use any framework/language you like.
- **Backend:**
- Create a simple REST API server that will accept requests from your frontend application.
- API 1 - POST request using (application/x-www-form-urlencoded) accepting 2 numbers, add the 2 numbers in the server, and return the result as a response (application/json)
- API 2 - POST request using (application/x-www-form-urlencoded) accepting 2 numbers, subtract the 2 numbers in the server, and return the result as a response (application/json)

Notes:

- You do not need to do any authentication for your requests
- You may use any framework/language you like

**Bonus**

- Write 1 or 2 unit testing (automated testing) to determine whether they are fit for use.
