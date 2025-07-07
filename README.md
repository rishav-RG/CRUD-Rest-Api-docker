
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
