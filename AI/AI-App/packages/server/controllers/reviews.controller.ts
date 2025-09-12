import type { Request, Response } from 'express';
import { reivewService } from '../services/review.service';
import { productRepository } from '../repositories/product.repository';
import { reviewRepository } from '../repositories/review.repository';

export type reviewData = {
  id?: number;
  author: string;
  rating: number;
  content: string;
  productId: number;
  createdAt?: Date;
};
export const reviewController = {
  async getReviews(req: Request, res: Response) {
    try {
      const productId = Number(req.params.id);

      if (isNaN(productId)) {
        res.status(400).json({ error: 'Invalid Product Id' });
        return;
      }
      const reviews = await reviewRepository.getReivews(productId);
      const summary = await reviewRepository.getReviewSummary(productId);
      const product = await productRepository.getProduct(productId);
      if (!product) {
        res.status(404).json({ error: 'Product does not exists' });
        return;
      }
      res.json({
        summary,
        reviews,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async postReviews(req: Request, res: Response) {
    try {
      const { author, rating, content, productId } = req.body;

      if (
        author == null ||
        rating == null ||
        content == null ||
        isNaN(productId)
      ) {
        res.status(400).json({ error: 'Bad Request' });
        return;
      }
      const data: reviewData = {
        author,
        rating,
        content,
        productId,
      };
      const reviews = await reviewRepository.postReivews(data);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  async summarizeReviews(req: Request, res: Response) {
    const productId = Number(req.params.id);
    if (isNaN(productId)) {
      res.status(400).json({ error: 'Invalid Product Id' });
    }

    const product = await productRepository.getProduct(productId);
    if (!product) {
      res.status(400).json({
        error: 'Invalid Product',
      });
      return;
    }
    const reviews = await reviewRepository.getReivews(productId, 1);
    if (!reviews.length) {
      res.status(400).json({
        error: 'There are no reviews to summarize.',
      });
      return;
    }
    const summary = await reivewService.summarizeReviews(productId);
    res.json(summary);
  },
};
