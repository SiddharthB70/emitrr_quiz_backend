import { Schema, model } from "mongoose";
import { ILanguage, ILanguageDocument } from "./languages.types";
import UniqueError from "../../utils/uniqueError";

const languageSchema = new Schema<ILanguage>({
    language: {
        type: String,
        required: true,
        unique: true,
    },
});

languageSchema.pre("save", async function (this: ILanguageDocument) {
    const language = await this.$model("Language").findOne({
        language: this.language,
    });
    if (language) throw new UniqueError("Language");
});

languageSchema.set("toJSON", {
    transform: (_doc, ret) => {
        delete ret.__v;
        delete ret._id;
    },
});

const Language = model<ILanguage>("Language", languageSchema);
export default Language;
