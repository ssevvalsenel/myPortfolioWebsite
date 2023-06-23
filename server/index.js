import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import cors from "cors";

dotenv.config(); //dotenv içerisindeki content'i buraya yükler

const app = express(); //express'i çağırma

app.use(cors());
app.use(express.json()); //json formatında gelen datayı pars etme, content type'ı json olan isteklere bakma
app.use("/users", userRouter);

app.listen(5000, () => { //5000. portta dinleme
  // connect to database
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
});
