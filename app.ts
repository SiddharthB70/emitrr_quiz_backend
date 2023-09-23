import config from "./utils/config";
import express from "express";
import mongoose from "mongoose";

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

const app = express();

app.use("/", (_req, res) => {
    res.send("Hello");
});

export default app;
