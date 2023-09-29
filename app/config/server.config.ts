const PORT = process.env.PORT || 3001;
const ORIGIN_URI = String(process.env.ORIGIN_URI);
const SESSION_SECRET = process.env.SESSION_SECRET as string;

export default { PORT, ORIGIN_URI, SESSION_SECRET };
