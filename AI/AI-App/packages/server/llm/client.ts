import OpenAI from 'openai';
import { Models } from 'openai/resources';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type generateTextOptions = {
  model?: string;
  prompt: string;
  instructions?: string;
  previousResponseId?: string;
  // temprature?:number;
  // maxTokens?:number;
};

type generateTextResult = {
  id: string;
  text: string;
};
export const llmClient = {
  async generateText({
    model = 'gpt-5-nano',
    prompt,
    instructions,
    previousResponseId,
  }: generateTextOptions): Promise<generateTextResult> {
    const response = await client.responses.create({
      model,
      input: prompt,
      instructions,
      previous_response_id: previousResponseId,
    });
    return { id: response.id, text: response.output_text };
  },
};
