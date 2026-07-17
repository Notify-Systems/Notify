import express from "express";
const app = express();

import routes from "./routes/index.route.js"
import errorHandler from "./middleware/error.middleware.js";

app.use(express.json());

app.use("/api", routes);

app.use(errorHandler);

export default app
