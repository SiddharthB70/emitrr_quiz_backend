import { dbConfig, redisConfig, serverConfig } from "./config";
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
import scoresRouter from "./api/scores";
import languagesRouter from "./api/languages";
import cors from "cors";

const app = express();
app.use(
    cors({
        credentials: true,
        origin: [serverConfig.ORIGIN_URI],
    }),
);
app.use(express.json());

console.log(serverConfig.ORIGIN_URI);

mongoose
    .connect(dbConfig.MONGO_URI)
    .then(() => {
        console.log("Connected to database");
    })
    .catch(() => {
        console.log("Unable to connect to database through primary uri.");

        mongoose
            .connect(dbConfig.MONGO_SECONDARY_URI)
            .then(() => {
                console.log("Connected to database through secondary uri.");
            })
            .catch(() => {
                console.log("Unable to connect to database ");
            });
    });

const redisClient = createClient({
    password: redisConfig.REDIS_PASSWORD,
    socket: {
        host: redisConfig.REDIS_HOST,
        port: redisConfig.REDIS_PORT,
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
app.use("/api/users", userRouter);
app.use(
    session({
        store: new RedisStore({ client: redisClient }),
        secret: serverConfig.SESSION_SECRET,
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

declare module "express-session" {
    interface SessionData {
        clientId: string;
    }
}

app.use(authHandler);
app.use("/api/questions", questionsRouter);
app.use("/api/scores", scoresRouter);
app.use("/api/languages", languagesRouter);
app.use(errorHandler);

export default app;
