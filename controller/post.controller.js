import db from "../src/db/index.js";

class PostController {
  async createPost(req, res) {
    const { author, title, content, picture } = req.body;
    const newPost = await db.query(
      "INSERT INTO Post(author, title, content, picture values ($1, $2, $3, $4 RETURNING *",
      [author, title, content, picture]
    );
    res.json(newPost.rows[0]);
  }
  async getPosts(req, res) {
    const posts = await db.query("SELECT from *");
    res.json(posts.rows);
  }
  async updatePost(req, res) {
    const { id, author, title, content, picture } = req.body;
    const post = await db.query(
      "UPDATE person set author = $1, title = $2, content = $3, picture = $4, where id = $5 RETURNING *",
      [author, title, content, picture, id]
    );
    res.json(post.rows[0]);
  }
  async deletePost(req, res) {
    const id = req.params.id;
    const post = await db.query("DELETE FROM person where id = $1", [id]);
    res.json(post.rows[0]);
  }
}

export default PostController;
