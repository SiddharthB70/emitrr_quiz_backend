import { Router } from "express";
import { getQuestion } from "./questions.controller";
const questionsRouter = Router();

questionsRouter.get("/", getQuestion);

export default questionsRouter;
