import { Schema, Types, model } from "mongoose";
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
        ret.id = ret._id as Types.ObjectId;
        delete ret._id;
        return ret;
    },
});

const Question = model<IQuestion>("Question", questionSchema);

export default Question;
