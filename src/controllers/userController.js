// stanadardized response function

import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

// HOW next(err) works :
// Use next(err) in any route to pass error to centralized handler.
// Express forwards it to app.use(errorHandler) at the end of index.js.
// basically  Express looks for a middleware function with this shape:
// (err, req, res, next) => {
// handle error
// }
// No need to import errorHandler in every route file.

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    handleResponse(res, 201, "User created successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "All Users fetched successfully", users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user || user.length === 0) {
      return handleResponse(res, 404, "User not found");
    }
    handleResponse(res, 201, "User fetched successfully", user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const user = await updateUserService(name, email, req.params.id);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(res, 201, "User fetched successfully", user);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await deleteUserService(req.params.id);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(res, 201, "User fetched successfully", user);
  } catch (err) {
    next(err);
  }
};
