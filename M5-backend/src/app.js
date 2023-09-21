import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./db/dbConnect.js";
import bodyParser from "body-parser";
import router from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnect();
app.use("/api", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
