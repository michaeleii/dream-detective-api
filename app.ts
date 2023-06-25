import express from "express";
import "dotenv/config";
import logger from "morgan";
import rateLimit from "express-rate-limit";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(logger("dev"));

import api from "./routes/api";

app.use("/api", api);

app.listen(PORT);

console.log(`Server running on port ${PORT}`);
