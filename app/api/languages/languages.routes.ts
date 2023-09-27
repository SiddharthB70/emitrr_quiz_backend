import { Router } from "express";
import getLanguages from "./languages.controller";
const languagesRouter = Router();

languagesRouter.use("", getLanguages);

export default languagesRouter;
