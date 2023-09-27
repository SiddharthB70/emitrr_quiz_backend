import { Request, Response } from "express";
import parseLBRequest from "./utils/parseLBRequest";
import Score from "./scores.model";
import parseUSRequest from "./utils/parseUSRequest";

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

export const postUserScore = async (req: Request, res: Response) => {
    const body = parseUSRequest(req.body);
    const userId = req.session.clientId;
    let userScore = await Score.findOne({
        user: userId,
        language: body.language,
    });

    if (userScore) {
        userScore.proficiency = body.proficiency;
        userScore.score =
            body.score > userScore.score ? body.score : userScore.score;
        await userScore.save();
    } else {
        userScore = new Score({
            user: userId,
            language: body.language,
            score: body.score,
            proficiency: body.proficiency,
        });

        await userScore.save();
    }

    res.status(201).json({ type: "success", message: "result saved" });
};
