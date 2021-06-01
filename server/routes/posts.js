import express from "express";
import { getPosts } from "../controllers/posts.js";
import { createPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);

export default router;
