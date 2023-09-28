import { Schema, model } from "mongoose";
import { IQuestion } from "./questions.types";

const questionSchema = new Schema<IQuestion>({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    answerIndex: { type: Number, required: true },
    difficulty: {
        type: Number,
        enum: [1, 2, 3],
        required: true,
    },
    language: { type: String, required: true },
});

const Question = model<IQuestion>("Question", questionSchema);

export default Question;
