import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import { conversationRepositiory } from '../repositories/conversation.repository';
import template from '../prompts/chatbot.txt';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const parkInfo = fs.readFileSync(
  path.join('__dirname', '..', 'prompts', 'WonderWorld.md'),
  'utf-8'
);

const instructions = template.replace('{{parkInfo}}', parkInfo);
type chatResponse = {
  id: string;
  message: string;
};
export const chatService = {
  async sendMessage(
    prompt: string,
    conversationId: string
  ): Promise<chatResponse> {
    const response = await client.responses.create({
      model: 'gpt-5-nano',
      instructions,
      input: prompt,
      previous_response_id:
        conversationRepositiory.getLastResponseId(conversationId),
      // max_output_tokens: 250,
    });
    conversationRepositiory.setLastResponseId(conversationId, response.id);
    return {
      id: response.id,
      message: response.output_text,
    };
  },
};
