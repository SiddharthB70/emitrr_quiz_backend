const REDIS_HOST = process.env.REDIS_HOST as string;
const REDIS_PORT = Number(process.env.REDIS_PORT);
const REDIS_PASSWORD = process.env.REDIS_PASSWORD as string;

export default { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD };
