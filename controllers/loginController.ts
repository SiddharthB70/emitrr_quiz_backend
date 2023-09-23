import { Router } from "express";
const loginRouter = Router();

loginRouter.get("/", (_req, res) => {
    res.json("Hello");
});

export default loginRouter;
