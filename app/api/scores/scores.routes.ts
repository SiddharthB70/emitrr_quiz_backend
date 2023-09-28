import { Router } from "express";
import {
    getLeaderBoard,
    getUserScore,
    postUserScore,
} from "./scores.controller";
const scoresRouter = Router();

scoresRouter.post("/leaderBoard", getLeaderBoard);
scoresRouter.get("/user", getUserScore);
scoresRouter.post("/user", postUserScore);

export default scoresRouter;
