import { generateText } from "ai";

export async function aiGateway(prompt: string) {
  if (!process.env.AI_GATEWAY_API_KEY) {
    throw new Error("AI_GATEWAY_API_KEY is not set");
  }

  const result = await generateText({
    model: "openai/gpt-4o-mini",
    prompt: prompt,
  });

  return result;
}
