import { Schema, Types, model } from "mongoose";
import { IUser, IUserDocument } from "./user.types";

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        validate: {
            validator: async function (this: IUserDocument) {
                const user = await this.$model("User").findOne({
                    username: this.username,
                });

                return !user;
            },
            message: "Username already exists",
        },
    },
    passwordHash: { type: String, required: true },
});

userSchema.set("toJSON", {
    transform: (_doc, ret) => {
        delete ret.passwordHash;
        ret.id = ret._id as Types.ObjectId;
        delete ret._id;
        delete ret.__v;
        return ret;
    },
});

const User = model<IUser>("User", userSchema);

export default User;
