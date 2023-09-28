import { Difficulty } from "../../types";
import FormatError from "../../utils/formatError";
import { isDifficulty, isNumber, isString } from "./typePredicates";

export const parseString = (value: unknown, field: string): string => {
    if (!isString(value)) throw new FormatError(field);
    return value;
};

export const parseNumber = (value: unknown, field: string): number => {
    if (!isNumber(value)) throw new FormatError(field);
    return value;
};

export const parseDifficulty = (difficulty: unknown): Difficulty => {
    if (!isNumber(difficulty) || !isDifficulty(difficulty))
        throw new FormatError("difficulty");
    return difficulty;
};
