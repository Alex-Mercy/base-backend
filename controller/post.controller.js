import db from "../db";

class PostController {
  async createPost(req, res) {
    const { author, title, content, picture } = req.body;
    const newPost = await db.query(
      "INSERT INTO Post(author, title, content, picture values ($1, $2, $3, $4 RETURNING *",
      [author, title, content, picture]
    );
    res.json(newPost.rows[0]);
  }
}

export default postController;
