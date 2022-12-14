import db from "../db/index.js";

class PostController {
  async createPost(req, res) {
    try {
      const { id, author, title, content, picture } = req.body;
      const newPost = await db.query(
        "INSERT INTO post(id, author, title, content, picture) values ($1, $2, $3, $4, $5) RETURNING *",
        [id, author, title, content, picture]
      );
      res.json(newPost.rows[0]);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getPosts(req, res) {
    try {
      const post = await db.query("SELECT * from post");
      res.json(post.rows);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOnePost(req, res) {
    try {
      const id = req.params.id;
      const post = await db.query("SELECT * from post where id = $1", [id]);
      res.json(post.rows[0]);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async updatePost(req, res) {
    try {
      const { id, author, title, content, picture } = req.body;
      const post = await db.query(
        "UPDATE post set author = $1, title = $2, content = $3, picture = $4 where id = $5 RETURNING *",
        [author, title, content, picture, id]
      );
      res.json(post.rows[0]);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async deletePost(req, res) {
    try {
      const id = req.params.id;
      const post = await db.query("DELETE FROM post where id = $1", [id]);
      res.json(post.rows[0]);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
