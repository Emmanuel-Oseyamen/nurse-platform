import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ConsultationsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, dto: any) {
    return this.prisma.consultation.create({
      data: {
        userId,
        topic: dto.topic,
        description: dto.description,
      },
    });
  }

  findMine(userId: string) {
    return this.prisma.consultation.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }
}