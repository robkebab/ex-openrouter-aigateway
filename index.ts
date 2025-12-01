import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.OPENROUTER_API_KEY) {
  throw new Error("OPENROUTER_API_KEY is not set");
}

async function main() {
  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const { text } = await generateText({
    model: openrouter.chat("openai/gpt-4o-mini"),
    prompt: "What's a good cat name? Return only the name, no other text.",
  });

  console.log(text);
}

main().catch(console.error);
