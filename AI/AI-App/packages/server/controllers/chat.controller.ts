import type { Request, Response } from 'express';
import { chatService } from '../services/chat.service';
import z from 'zod';

const chatSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(1, 'prompt is required')
    .max(1000, 'prompt exceeds maximum length of 1000'),
  conversationId: z.uuid(),
});
export const chatController = {
  async sendMessage(req: Request, res: Response) {
    const parsedResult = chatSchema.safeParse(req.body);
    if (!parsedResult.success) {
      return res.status(400).json(parsedResult.error.format());
    }
    try {
      const { prompt, conversationId } = req.body;
      const response = await chatService.sendMessage(prompt, conversationId);
      res.json({ message: response.message });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
