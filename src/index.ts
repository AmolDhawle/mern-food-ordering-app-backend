import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "../src/routes/userRoutes" 

mongoose
    .connect(process.env.MONGO_CONNECTION_STRING as string)
    .then(() => console.log("Connected to database!"))

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "health OK!" });
  });
  

app.use("/api/my/user", userRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});