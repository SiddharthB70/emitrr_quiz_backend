import { Difficulty } from "../../types";

export interface IGetQuestionBody {
    difficulty: Difficulty;
    language: string;
    limit: number;
}

export interface IQuestion {
    question: string;
    options: string[];
    answerIndex: number;
    difficulty: Difficulty;
    language: string;
}
