import express from "express";

const PORT = process.env.PORT || 5000;
import router from "./src/routes/router.js";

const app = express();

app.use(express.json());
app.use("/api", router);
app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));

// async function startApp() {
//   try {
//     app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
//   } catch (error) {
//     console.log(error);
//   }
// }

// startApp();
