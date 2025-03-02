import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://harinivm77:Succeed123@recipesharing.ofcxj.mongodb.net/RecipeSharing?retryWrites=true&w=majority&appName=RecipeSharing"
);

app.listen(3001, () => console.log("msg"));
