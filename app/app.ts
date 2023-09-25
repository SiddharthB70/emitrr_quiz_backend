import { dbConfig } from "./config";
require("express-async-errors");
import express from "express";
import mongoose from "mongoose";
import userRouter from "./api/user";
import errorHandler from "./middleware/errorHandler";

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
app.use(errorHandler);

export default app;
