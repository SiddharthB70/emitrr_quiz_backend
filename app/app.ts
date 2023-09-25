import express from "express";
import mongoose from "mongoose";
import { dbConfig } from "./config";
import userRouter from "./api/user";

const app = express();
app.use(express.json());

mongoose
    .connect(dbConfig.MONGO_URI)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error: unknown) => {
        if (error instanceof Error) {
            console.log("Unable to connect to database. " + error.message);
        }
    });

app.use("/api/users", userRouter);

export default app;
