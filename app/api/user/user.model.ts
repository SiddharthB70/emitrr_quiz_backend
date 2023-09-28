import { Schema, Types, model } from "mongoose";
import { IUser, IUserDocument } from "./user.types";
import UniqueError from "../../utils/uniqueError";

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
    },
    passwordHash: { type: String, required: true },
});

userSchema.pre("save", async function (this: IUserDocument) {
    const user = await this.$model("User").findOne({
        username: this.username,
    });

    if (user) throw new UniqueError("Username");
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
