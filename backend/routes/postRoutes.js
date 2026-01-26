import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
import { getAllPosts } from "../controllers/postsController.js";

const router = express.Router();

router.get("/", AuthMiddleware, getAllPosts);

export default router;