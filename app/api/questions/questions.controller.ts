import { Request, Response } from "express";
import parseGetQuestion from "./utils/parseGetQuestion";
import Question from "./questions.model";

export const getQuestion = async (req: Request, res: Response) => {
    const query = parseGetQuestion(req.query);
    const questions = await Question.aggregate()
        .match({
            language: query.language,
            difficulty: query.difficulty,
        })
        .sample(query.limit);

    const questionDocuments = questions.map((question) =>
        Question.hydrate(question),
    );

    res.json(questionDocuments);
};
