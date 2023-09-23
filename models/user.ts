import { Schema, model } from "mongoose";

interface IUser {
    username: string;
    passwordHash: string;
    score: number;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    passwordHash: { type: String, required: true },
    score: { type: Number, required: true },
});

const User = model("User", userSchema);

export default User;
