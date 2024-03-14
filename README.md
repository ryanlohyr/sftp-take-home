# sftp-take-home
### Setting up Frontend
1. **Navigate to Frontend Directory:**
    ```bash
    cd sftp-take-home/frontend
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
1. **Create a Virtual Environment:**
    ```bash
    python3 -m venv venv
    ```

2. **Activate the Virtual Environment:**
    - **On Linux/Mac:**
        ```bash
        source venv/bin/activate
        ```
    - **On Windows:**
        ```bash
        venv\Scripts\activate
        ```

3. **Install Python Dependencies:**
    ```bash
    pip3 install -r requirements.txt
    ```

4. **Make start.sh Executable:**
    ```bash
    chmod +x start.sh
    ```

5. **Run the Application:**
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
