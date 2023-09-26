import { Document } from "mongoose";

export interface IUser {
    username: string;
    passwordHash: string;
}

export type IUserDocument = Document & IUser;
