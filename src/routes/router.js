import Router from "express";
import postController from "../controller/postController.js";

const router = new Router();

router.post("/post", postController.createPost);
router.get("/post", postController.getPosts);
router.get("/post/:id", postController.getOnePost);
router.put("/post", postController.updatePost);
router.delete("/post/:id", postController.deletePost);

export default router;
