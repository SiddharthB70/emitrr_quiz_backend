import { Request, Response } from "express";
import parseLBRequest from "./utils/parseLBRequest";
import Score from "./scores.model";

export const getLeaderBoard = async (req: Request, res: Response) => {
    const body = parseLBRequest(req.body);
    const leaderBoard = await Score.find({ language: body.language })
        .populate("user")
        .select(["-language", "-proficiency"])
        .sort({ score: -1 })
        .limit(50);
    res.json(leaderBoard);
};

export const getUserScore = async (req: Request, res: Response) => {
    const userId = req.session.clientId;
    const scores = await Score.find({ user: { _id: userId } }).select([
        "-score",
        "-user",
    ]);
    res.json(scores);
};
