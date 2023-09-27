import { Router } from "express";
import { getLeaderBoard, getUserScore } from "./scores.controller";
const scoresRouter = Router();

scoresRouter.get("/leaderBoard", getLeaderBoard);
scoresRouter.get("/user", getUserScore);

export default scoresRouter;
