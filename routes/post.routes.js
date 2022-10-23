import { Router } from "express";
import postController from "../controller/post.controller.js";

const postRouter = new Router();

postRouter.post("/post", postController.createPost);
postRouter.get("/post", postController.getPosts);
postRouter.put("/post", postController.updatePost);
postRouter.delete("/post/:id", postController.deletePost);

module.exports = postRouter;
