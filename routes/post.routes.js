import { Router } from "express";
import postController from "../controller/post.controller";

const router = new Router();

router.post("/post", postController.createPost);

export default router;
