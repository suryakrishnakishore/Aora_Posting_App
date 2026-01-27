import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
import { getAllPosts, getByTitile } from "../controllers/postsController.js";

const router = express.Router();

router.get("/", AuthMiddleware, getAllPosts);
router.get("/:query", AuthMiddleware, getByTitile);

export default router;