import { llmClient } from '../llm/client';
import { reviewRepository } from '../repositories/review.repository';
import template from '../prompts/summarize-review.txt';

export const reivewService = {
  async summarizeReviews(productId: number): Promise<string> {
    const existingSummary = await reviewRepository.getReviewSummary(productId);
    if (existingSummary) {
      return existingSummary;
    }
    const reviews = await reviewRepository.getReivews(productId, 10);
    const joinedReviews = reviews.map((r) => r.content).join('\n');
    const prompt = template.replace('{{reviews}}', joinedReviews);
    const { text: summary } = await llmClient.generateText({
      model: 'gpt-5-nano',
      prompt,
    });
    await reviewRepository.storeReviewSummary(productId, summary);
    return summary;
  },
};
