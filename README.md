# ex-openrouter-aigateway

A demonstration project comparing two different approaches for integrating AI models using the Vercel AI SDK: OpenRouter and AI Gateway.

## Overview

This project showcases two implementation methods for accessing AI language models:

1. **OpenRouter** - Uses the official `@openrouter/ai-sdk-provider` package
2. **AI Gateway** - Direct integration with an AI Gateway service

Both implementations use the Vercel AI SDK's `generateText` function to interact with the `openai/gpt-4o-mini` model.

## Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v10.20.0 or higher)

## Installation

```bash
pnpm install
```

## Configuration

Create a `.env.local` file in the project root with the required API keys:

```bash
# For OpenRouter implementation
OPENROUTER_API_KEY=your_openrouter_api_key_here

# For AI Gateway implementation
AI_GATEWAY_API_KEY=your_ai_gateway_api_key_here
```

### Getting API Keys

- **OpenRouter**: Sign up at [https://openrouter.ai](https://openrouter.ai) to get your API key
- **AI Gateway**: Navigate to the AI Gateway tab in your Vercel dashboard (https://vercel.com) and generate a key

## Usage

Run the project using:

```bash
pnpm start [implementation] [prompt]
```

### Arguments

- `implementation` (optional): Choose between `gateway` or `openrouter`. Defaults to `gateway`.
- `prompt` (optional): Your custom prompt text. Defaults to "What's a good cat name? Return only the name, no other text."

### Examples

**Using the default gateway implementation with default prompt:**
```bash
pnpm start
```

**Using OpenRouter:**
```bash
pnpm start openrouter
```

**Using a custom prompt with OpenRouter:**
```bash
pnpm start openrouter "Explain quantum computing in one sentence"
```

**Using AI Gateway with a custom prompt:**
```bash
pnpm start gateway "What is the meaning of life?"
```

## Project Structure

```
.
├── index.ts                      # Main entry point
├── implementations/
│   ├── index.ts                 # Exports for implementations
│   ├── openrouter.ts            # OpenRouter implementation
│   └── ai-gateway.ts            # AI Gateway implementation
├── package.json
├── tsconfig.json
└── README.md
```

## Output

The program outputs:
1. The generated text response from the AI model
2. Provider metadata including usage statistics and other response details

Example output:
```
RESULT:
Whiskers
--------------------------------
PROVIDER METADATA:
{
  // Provider-specific metadata here
}
```

## Key Differences

### OpenRouter Implementation
- Uses the official `@openrouter/ai-sdk-provider` package
- Requires explicit provider creation with `createOpenRouter()`
- Wraps the model with the provider: `openrouter.chat("openai/gpt-4o-mini")`

### AI Gateway Implementation
- Uses the AI SDK directly without a specific provider wrapper
- Simpler setup with just the model string
- Ideal for direct gateway integrations

## Dependencies

- **ai**: Vercel AI SDK for unified AI model interactions
- **@openrouter/ai-sdk-provider**: Official OpenRouter provider for the AI SDK
- **dotenv**: Environment variable management
- **tsx**: TypeScript execution for development
- **typescript**: TypeScript language support

## License

ISC

