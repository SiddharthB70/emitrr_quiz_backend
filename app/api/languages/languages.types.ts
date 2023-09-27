import { Document } from "mongoose";

export interface ILanguage {
    language: string;
}

export type ILanguageDocument = ILanguage & Document;
