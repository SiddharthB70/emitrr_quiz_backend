import { Difficulty } from "../../types";

export const isString = (text: unknown): text is string => {
    return text instanceof String || typeof text === "string";
};

export const isNumber = (val: unknown): val is number => {
    return val instanceof Number || typeof val === "number";
};

export const isDifficulty = (difficulty: number): difficulty is Difficulty => {
    return [1, 2, 3].includes(difficulty);
};
