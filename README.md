# Project Name: CRUD-Rest-Api-docker

## Purpose
This project is a RESTful API for user management, supporting Create, Read, Update, and Delete (CRUD) operations. It is containerized using Docker for easy deployment and environment consistency.

## Key Components

1. **Dockerization**
   - **docker-compose.yml**: Orchestrates multi-container Docker applications, running the API and a PostgreSQL database together.
   - **Dockerfile**: Defines the build instructions for the API service container.

2. **Node.js Backend**
   - **package.json / package-lock.json**: Manage Node.js dependencies and scripts.

3. **Source Code (`src/`)**
   - **index.js**: Entry point for the application, sets up the server and middleware.
   - **config/db.js**: Handles database connection configuration.
   - **controllers/userController.js**: Contains logic for handling user-related API requests.
   - **models/userModel.js**: Defines the user data schema and database interaction methods.
   - **routes/userRoutes.js**: Sets up API endpoints for user operations.
   - **middlewares/**
     - **errorHandler.js**: Centralized error handling middleware.
     - **inputValidator.js**: Middleware for validating incoming request data.
   - **data/**
     - **createUserTable.js**: Script to create the user table in the database.
     - **data.sql**: SQL file for seeding or initializing the database.

---

# CRUD REST API with Docker

A simple, production-ready RESTful API for user management, built with Node.js, Express, and PostgreSQL, and fully containerized using Docker.  
This project demonstrates how to structure a backend application with best practices, including modular code organization, environment-based configuration, and seamless local development using Docker Compose.

## Features

- User CRUD operations (Create, Read, Update, Delete)
- Express.js backend
- PostgreSQL database
- Input validation and error handling
- Dockerized for easy setup and deployment

## Project Structure

```
CRUD-Rest-Api-docker/
├── docker-compose.yml
├── Dockerfile
├── package.json
├── .gitignore
└── src/
    ├── config/
    ├── controllers/
    ├── data/
    ├── middlewares/
    ├── models/
    └── routes/
```

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/)
- (Optional) [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for local development

### Running with Docker

1. **Clone the repository:**
   ```sh
   git clone https://github.com/rishav-RG/CRUD-Rest-Api-docker.git
   cd CRUD-Rest-Api-docker
   ```

2. **Start the services:**
   ```sh
   docker-compose up --build
   ```

3. **API will be available at:**  
   [http://localhost:5001](http://localhost:5001)

4. **PostgreSQL will be running at:**  
   Host: `localhost`  
   Port: `5432`  
   User: `postgres`  
   Password: `admin`  
   Database: `express-crud`

### API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | /users           | Get all users         |
| GET    | /users/:id       | Get user by ID        |
| POST   | /users           | Create a new user     |
| PUT    | /users/:id       | Update user by ID     |
| DELETE | /users/:id       | Delete user by ID     |

### Environment Variables

Environment variables for the backend are set in `docker-compose.yml`:

- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`

### Database Initialization

- The database is automatically created and initialized using the scripts in `src/data/`.

## Development

To run locally without Docker:

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up a local PostgreSQL database and configure your `.env` file.
3. Start the server:
   ```sh
   npm run dev
   ```

## License

This project is licensed under the MIT License.

---

**Feel free to customize this README further for your needs!** 