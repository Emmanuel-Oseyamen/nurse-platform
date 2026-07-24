import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class AnswersService {
  constructor(
    private prisma: PrismaService,
    private notificationsService: NotificationsService,
  ) {}

  async create(nurseId: string, dto: { content: string; questionId: string }) {
    const question = await this.prisma.question.findUnique({
      where: { id: dto.questionId },
      include: { answer: true },
    });

    if (!question) {
      throw new BadRequestException('Question not found');
    }

    if (question.answer) {
      throw new BadRequestException('Already answered');
    }

    const answer = await this.prisma.answer.create({
      data: {
        content: dto.content,
        questionId: dto.questionId,
        nurseId,
      },
    });

    await this.prisma.question.update({
      where: { id: dto.questionId },
      data: { status: 'ANSWERED' },
    });

    await this.notificationsService.create(
      question.userId,
      'Question Answered',
      'A nurse has answered your question.'
    );

    return answer;
  }

  findByQuestion(questionId: string) {
    return this.prisma.answer.findUnique({
      where: { questionId },
      include: {
        question: true,
        nurse: true,
      },
    });
  }
}