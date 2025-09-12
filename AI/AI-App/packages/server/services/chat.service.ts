import fs from 'fs';
import path from 'path';
import { conversationRepositiory } from '../repositories/conversation.repository';
import template from '../prompts/chatbot.txt';
import { llmClient } from '../llm/client';

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
    const response = await llmClient.generateText({
      model: 'gpt-5-nano',
      instructions,
      prompt,
      previousResponseId:
        conversationRepositiory.getLastResponseId(conversationId),
      // max_output_tokens: 250,
    });
    conversationRepositiory.setLastResponseId(conversationId, response.id);
    return {
      id: response.id,
      message: response.text,
    };
  },
};
