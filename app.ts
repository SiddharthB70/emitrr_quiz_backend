import config from "./utils/config";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./controllers/userController";

const app = express();
app.use(express.json());

mongoose
    .connect(config.MONGO_URI)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error: unknown) => {
        if (error instanceof Error) {
            console.log("Unable to connect to database. " + error.message);
        }
    });

app.use("/user", userRouter);

export default app;
