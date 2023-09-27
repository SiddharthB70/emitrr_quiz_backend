import { Router } from "express";
import { getLeaderBoard } from "./scores.controller";
const scoresRouter = Router();

scoresRouter.get("/leaderBoard", getLeaderBoard);

export default scoresRouter;
