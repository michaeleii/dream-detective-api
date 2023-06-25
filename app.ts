import express from "express";
import "dotenv/config";
import logger from "morgan";
import rateLimit from "express-rate-limit";

const app = express();

const PORT = process.env.PORT || 3000;

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(logger("dev"));

import api from "./routes/api";

app.use("/api", apiLimiter, api);

app.listen(PORT);

console.log(`Server running on port ${PORT}`);
