import app from "./app";
import { serverConfig } from "./config";

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on port ${serverConfig.PORT}`);
});
