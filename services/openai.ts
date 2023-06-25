import openai from "../config/openaiConfig";

async function generateDreamInterpretation(dream: string) {
  const interpretation = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a dream interpreter." },
      { role: "user", content: dream },
    ],
    max_tokens: process.env.MAX_TOKENS ? +process.env.MAX_TOKENS : 300,
  });
  return interpretation.data.choices[0].message;
}

export { generateDreamInterpretation };
