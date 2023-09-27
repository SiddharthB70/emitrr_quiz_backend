import { Response, Request } from "express";
import Language from "./languages.model";

const getLanguages = async (_req: Request, res: Response) => {
    const languages = await Language.find({});
    res.send(languages);
};

export default getLanguages;
