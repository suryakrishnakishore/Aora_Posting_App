import express from "express";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
import { getAllPosts, getByTitile, getMyPosts } from "../controllers/postsController.js";

const router = express.Router();

router.get("/", AuthMiddleware, getAllPosts);
router.get("/:query", AuthMiddleware, getByTitile);
router.get("/my", AuthMiddleware, getMyPosts);

export default router;