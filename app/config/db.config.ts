const MONGO_URI = process.env.MONGO_URI as string;
const MONGO_SECONDARY_URI = process.env.MONGO_SECONDARY_URI as string;

export default { MONGO_URI, MONGO_SECONDARY_URI };
