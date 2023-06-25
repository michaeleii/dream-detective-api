import express from "express";
import { generateDreamInterpretation } from "../services/openai";

const api = express.Router();

api.post("/dream", async (req, res) => {
  const { dream } = req.body;
  try {
    const interpretation = await generateDreamInterpretation(dream);
    res.json(interpretation);
  } catch (error) {
    console.error(error);
  }
});

export default api;
