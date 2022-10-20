import express from "express";

const PORT = process.env.PORT || 5000;
import router from "./routes/post.routes";

const app = express();

app.use(express.json());
app.use("api");

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json("Сервер работает 123");
});

async function startApp() {
  try {
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();
