const PORT = process.env.PORT || 3001;
const ORIGIN_URI = process.env.ORIGIN_URI as string;
const SESSION_SECRET = process.env.SESSION_SECRET as string;

export default { PORT, ORIGIN_URI, SESSION_SECRET };
