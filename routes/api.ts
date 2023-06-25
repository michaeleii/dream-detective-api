import express from "express";
import { generateDreamInterpretation } from "../services/openai";

const api = express.Router();

api.post("/dream", async (req, res) => {
  const { dream } = req.body;
  const interpretation = await generateDreamInterpretation(dream);
  res.json(interpretation);
});

export default api;
