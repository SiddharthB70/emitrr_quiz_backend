import { Schema, model } from "mongoose";

interface IUser {
    username: string;
    passwordHash: string;
    proficiency: "amateur" | "semi-pro" | "professional";
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    passwordHash: { type: String, required: true },
    proficiency: {
        type: String,
        required: true,
        enum: ["amateur", "semi-pro", "professional"],
    },
});

const User = model("User", userSchema);

export default User;
