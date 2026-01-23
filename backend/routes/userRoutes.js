import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
import { getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", AuthMiddleware, getUser);

export default router;