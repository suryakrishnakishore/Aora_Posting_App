import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
import { createPost, getAllPosts, getByTitile, getMyPosts } from "../controllers/postsController.js";

const router = express.Router();

router.get("/", AuthMiddleware, getAllPosts);
router.get("/:query", AuthMiddleware, getByTitile);
router.get("/my", AuthMiddleware, getMyPosts);
router.post("/", AuthMiddleware, createPost);

export default router;