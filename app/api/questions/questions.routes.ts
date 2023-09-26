import { Router } from "express";
import { getQuestion } from "./questions.controller";
const questionsRouter = Router();

questionsRouter.post("/", getQuestion);

export default questionsRouter;
