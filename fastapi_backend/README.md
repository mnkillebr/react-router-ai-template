# FastAPI Backend Server

This project is a backend server built using FastAPI, designed to provide a robust and scalable API for various applications. Below are the key features and components of this server:

## Features

- **FastAPI Framework**: Utilizes FastAPI for building the server, offering high performance and easy-to-use features for API development.

- **User Authentication**: Implements `fastapi-users` to handle JWT authentication and user management, providing secure and efficient user handling.

- **Database Migrations**: Uses Alembic for database migrations, ensuring smooth and version-controlled database schema changes.

- **CopilotKit Integration**: Incorporates CopilotKit to serve CrewAI and Langraph agents, enabling advanced AI functionalities and integrations.

## Installation

To set up the project, ensure you have Python installed and follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fastapi_backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows use `.venv\\Scripts\\activate`
   ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables by creating a `.env` file based on the `.env.example` provided.

5. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

## Running with Docker

To run the backend using Docker, follow these steps:

1. Ensure Docker is installed and running on your machine. Make sure you are in the project root folder.

2. Build and start the database service in detached mode:
   ```bash
   docker-compose build db
   docker-compose up -d db
   ```

3. Build the backend Docker image:
   ```bash
   docker-compose build backend
   ```

4. Run the backend service:
   ```bash
    docker-compose up backend
   ```

## Generate OpenAPI Schema

To generate the open api schema for using types and defining routes for the frontend run:
`uv run -m commands.generate_openapi_schema`

## Usage

- Access the API documentation at `http://localhost:8000/docs` once the server is running.
- Use the provided endpoints to interact with the server for user management, authentication, and AI functionalities.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
