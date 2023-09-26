import { dbConfig } from "./config";
require("express-async-errors");
import express from "express";
import mongoose from "mongoose";
import userRouter from "./api/user";
import errorHandler from "./middleware/errorHandler";
import authHandler from "./middleware/authHandler";
import session = require("express-session");
import { createClient } from "redis";
import RedisStore from "connect-redis";
import questionsRouter from "./api/questions";

declare module "express-session" {
    interface SessionData {
        clientId: string;
    }
}

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

const redisClient = createClient({
    socket: {
        port: 6379,
        host: "localhost",
    },
});
redisClient
    .connect()
    .then(() => {
        console.log("Connected to Redis Server");
    })
    .catch((error) => {
        console.log(error);
    });
app.use(
    session({
        store: new RedisStore({ client: redisClient }),
        secret: "secret",
        name: "session_id",
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 30,
        },
        saveUninitialized: false,
        resave: false,
    }),
);

app.use("/api/users", userRouter);
app.use(authHandler);
app.use("/api/questions", questionsRouter);
app.use(errorHandler);

export default app;
