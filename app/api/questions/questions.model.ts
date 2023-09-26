import { Schema, model } from "mongoose";

interface IQuestion {
    question: string;
    options: string[];
    answerIndex: number;
    difficulty: "amateur" | "semi-pro" | "professional";
}

const questionSchema = new Schema<IQuestion>({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    answerIndex: { type: Number, required: true },
    difficulty: {
        type: String,
        enum: ["amateur", "semi-pro", "professional"],
        required: true,
    },
});

const Question = model("Question", questionSchema);
export default Question;
