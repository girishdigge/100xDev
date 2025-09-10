import OpenAI from 'openai';
import { conversationRepositiory } from '../repositories/conversation.repository';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
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
