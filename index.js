import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Our Book Club API is now available on port ${port}`);
});
