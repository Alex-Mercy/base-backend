import express from "express";

const PORT = process.env.PORT || 5000;
import { postRouter } from "./routes/post.routes.js";

const app = express();

app.use(express.json());
app.use("api", postRouter);

async function startApp() {
  try {
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();
