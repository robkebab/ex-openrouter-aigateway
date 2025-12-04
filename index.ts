import { generateText } from "ai";
import dotenv from "dotenv";
import { aiGateway, openrouter } from "./implementations";

type GenerateTextResult = Awaited<ReturnType<typeof generateText>>;

dotenv.config({ path: ".env.local", quiet: true });

const DEFAULT_IMPLEMENTATION = "gateway";
const DEFAULT_PROMPT =
  "What's a good cat name? Return only the name, no other text.";

async function main() {
  const [implementation = DEFAULT_IMPLEMENTATION, prompt = DEFAULT_PROMPT] =
    process.argv.slice(2);

  let result: GenerateTextResult;
  switch (implementation) {
    case "openrouter":
      result = await openrouter(prompt);
      break;
    case "gateway":
      result = await aiGateway(prompt);
      break;
    default:
      throw new Error(`Implementation ${implementation} not found`);
  }

  console.log("RESULT:");
  console.log(result.text);
  console.log("--------------------------------");
  console.log("PROVIDER METADATA:");
  console.log(JSON.stringify(result.providerMetadata, null, 2));
}

main().catch(console.error);