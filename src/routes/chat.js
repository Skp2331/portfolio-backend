import { Router } from "express";
import OpenAI from "openai";

const router = Router();

const apiKey = process.env.OPENAI_API_KEY;
console.log("OPENAI KEY LOADED? =>", apiKey ? "YES" : "NO");

const client = new OpenAI({ apiKey });

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;

    const systemPrompt = `
You are an AI persona of Som Kumar Pawar.
Som is a full-stack developer skilled in MERN, Java, DSA, REST APIs, and AI integrations.
He has built Imagify, SoundScape, a Java Bank App.
Respond in a friendly, confident tone.
    `;

    const userText = messages[messages.length - 1]?.content || "";

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userText,
        },
      ],
    });

    const reply = response.output_text;

    res.json({
      reply: { role: "assistant", content: reply },
    });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({
      reply: { role: "assistant", content: "AI backend error 😕" },
    });
  }
});

export default router;
