import { Schema, model } from "mongoose";
import { ILanguage, ILanguageDocument } from "./languages.types";

const languageSchema = new Schema<ILanguage>({
    language: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: async function (this: ILanguageDocument) {
                const language = await this.$model("Language").findOne({
                    language: this.language,
                });
                return !language;
            },
            message: "Language already exists",
        },
    },
});

languageSchema.set("toJSON", {
    transform: (_doc, ret) => {
        delete ret.__v;
        delete ret._id;
    },
});

const Language = model<ILanguage>("Language", languageSchema);
export default Language;
