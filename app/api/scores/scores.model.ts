import { Schema, model } from "mongoose";
import { IScore } from "./scores.types";

const scoreSchema = new Schema<IScore>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    language: { type: String, required: true },
    proficiency: { type: Number, required: true },
    score: { type: Number, required: true },
});
scoreSchema.set("toJSON", {
    transform: (_doc, ret) => {
        delete ret.__v;
        delete ret._id;
    },
});

const Score = model<IScore>("Score", scoreSchema);
export default Score;
