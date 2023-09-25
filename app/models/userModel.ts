import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
    username: string;
    passwordHash: string;
    proficiency: "amateur" | "semi-pro" | "professional";
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        validate: {
            validator: async function (this: IUser) {
                const user = await this.$model("User").findOne({
                    username: this.username,
                });

                return !user;
            },
            message: "Username already exists",
        },
    },
    passwordHash: { type: String, required: true },
    proficiency: {
        type: String,
        required: true,
        enum: ["amateur", "semi-pro", "professional"],
    },
});

const User = model<IUser>("User", userSchema);

export default User;
