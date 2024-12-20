import express from "express";
import dbConnnection from "./database/database";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes";
import multer from "multer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
dbConnnection();
app.use(cors());

app.use("/location", router);

app.listen(PORT, () => {
  console.log(`Server Running on port number: ${PORT}`);
});
