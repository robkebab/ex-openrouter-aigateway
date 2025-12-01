import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText } from 'ai';


async function main() {
const openrouter = createOpenRouter({
  apiKey: 'YOUR_OPENROUTER_API_KEY',
});

    const { text } = await generateText({
        model: openrouter.chat('anthropic/claude-3.5-sonnet'),
        prompt: 'What is OpenRouter?',
    });

    console.log(text);
}

main().catch(console.error);