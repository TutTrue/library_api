import express from "express";
import router from "./routes/index.js";


const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
