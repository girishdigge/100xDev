import OpenAI from 'openai';
import { InferenceClient } from '@huggingface/inference';

const inferenceClient = new InferenceClient(process.env.HF_TOKEN);

const openAIClient = new OpenAI({
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
    const response = await openAIClient.responses.create({
      model,
      input: prompt,
      instructions,
      previous_response_id: previousResponseId,
    });
    return { id: response.id, text: response.output_text };
  },

  async summarize(text: string) {
    const output = await inferenceClient.summarization({
      model: 'facebook/bart-large-cnn',
      inputs: text,
      provider: 'hf-inference',
    });
    return output.summary_text;
  },
};
