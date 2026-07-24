import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { QuestionVisibility } from '@prisma/client';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, dto: { title: string; content: string; visibility: any }) {
    return this.prisma.question.create({
      data: {
        title: dto.title,
        content: dto.content,
        visibility: dto.visibility,
        userId,
      },
    });
  }

  findAll() {
    return this.prisma.question.findMany({
      where: { visibility: 'PUBLIC' },
      include: { answer: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findMine(userId: string) {
    return this.prisma.question.findMany({
      where: { userId },
      include: { answer: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.question.findUnique({
      where: { id },
      include: {
        answer: true,
      },
    });
  }
}