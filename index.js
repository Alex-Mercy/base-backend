import express from "express";

const PORT = 5000;

const app = express();

app.use(express.json());

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