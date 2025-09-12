import dayjs from 'dayjs';
import type { reviewData } from '../controllers/reviews.controller';
import { PrismaClient, type Review } from '../generated/prisma';
const prisma = new PrismaClient();

export const reviewRepository = {
  async getReivews(productId: number, limit?: number): Promise<Review[]> {
    return prisma.review.findMany({
      where: { productId },
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
  },
  async postReivews(data: reviewData): Promise<reviewData> {
    return prisma.review.create({
      data: { ...data },
    });
  },
  async storeReviewSummary(productId: number, summary: string) {
    const now = new Date();
    const expiresAt = dayjs().add(7, 'days').toDate();

    const data = {
      content: summary,
      expiresAt,
      generatedAt: now,
      productId,
    };
    return prisma.summary.upsert({
      where: { productId },
      create: data,
      update: data,
    });
  },
  async getReviewSummary(productId: number): Promise<string | null> {
    const summary = await prisma.summary.findFirst({
      where: {
        AND: [{ productId }, { expiresAt: { gt: new Date() } }],
      },
    });
    return summary ? summary.content : null;
  },
};
