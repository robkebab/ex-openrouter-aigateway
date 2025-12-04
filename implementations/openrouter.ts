import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";

export async function openrouter(prompt: string) {
  if (!process.env.OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY is not set");
  }

  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const result = await generateText({
    model: openrouter.chat("openai/gpt-4o-mini"),
    prompt: prompt,
  });

  return result;
}