import { Types } from "mongoose";
import { Difficulty } from "../../types";

export interface IScore {
    user: Types.ObjectId;
    language: string;
    proficiency: Difficulty;
    score: number;
}

export interface LBRequest {
    language: string;
}

export type USRequest = Omit<IScore, "user">;
