import pool from "../config/db.js";

export const getAllUsersService = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};
export const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM users where id = $1", [id]);
  // Always use parameterized queries like $1 with [value] to prevent SQL injection.
  // Avoid direct string interpolation (e.g., ...WHERE id = ${id}), as malicious input can execute harmful SQL.
  // as if someone puts const id = "1; DROP TABLE users;" executes SELECT * FROM users WHERE id = 1; DROP TABLE users;
  // this will drop tables even if only id req to fetch
  // Parameterized queries treat input as data, not executable code.
  // Example: pool.query("SELECT * FROM users WHERE id = $1", [id]) is safe
  return result.rows;
};

// RETURNING * tells PostgreSQL to return the full row(s) that were inserted/updated/deleted.
// Without RETURNING *, you wouldn't get the new or changed data back in result.
export const createUserService = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *",
    [name, email]
  );
  return result.rows[0];
};
export const updateUserService = async (name, email, id) => {
  const result = await pool.query(
    "UPDATE users set name = $1 , email = $2 where id=$3 RETURNING *",
    [name, email, id]
  );
  return result.rows[0];
};
export const deleteUserService = async (id) => {
  const result = await pool.query(
    "DELETE FROM users where id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
