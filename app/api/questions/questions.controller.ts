import { Request, Response } from "express";
import parseGetQuestion from "./utils/parseGetQuestion";
import Question from "./questions.model";

export const getQuestion = async (req: Request, res: Response) => {
    const body = parseGetQuestion(req.body);
    const questions = await Question.aggregate()
        .match({
            language: body.language,
            difficulty: body.difficulty,
            _id: { $nin: body.exclude },
        })
        .sample(body.limit)
        .addFields({ id: "$_id" });

    const questionDocuments = questions.map((question) =>
        Question.hydrate(question),
    );

    res.json(questionDocuments);
};
