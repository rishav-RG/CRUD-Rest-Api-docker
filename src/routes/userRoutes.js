import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/user", validateUser, createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUser);
router.post("/user/:id", validateUser, updateUser);

export default router;
