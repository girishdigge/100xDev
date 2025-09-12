import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controller';
import { reviewController } from './controllers/reviews.controller';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World,F1 monza today.');
});
router.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from api hello' });
});

router.post('/api/chat', chatController.sendMessage);

router.get('/api/products/:id/reviews', reviewController.getReviews);
router.post('/api/products/reviews', reviewController.postReviews);

router.get(
  '/api/products/:id/reviews/summarizer',
  reviewController.summarizeReviews
);

export default router;
