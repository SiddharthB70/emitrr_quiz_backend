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

questionSchema.set("toJSON", {
    transform: (_doc, ret) => {
        delete ret.__v;
        delete ret._id;
        delete ret.difficulty;
        delete ret.language;
    },
});

const Question = model<IQuestion>("Question", questionSchema);

export default Question;
