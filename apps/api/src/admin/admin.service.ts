import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany({
      include: {
        nurseProfile: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getStats() {
    const users = await this.prisma.user.count();

    const nurses = await this.prisma.user.count({
      where: {
        role: "NURSE",
      },
    });

    const questions =
      await this.prisma.question.count();

    const consultations =
      await this.prisma.consultation.count();

    const tips =
      await this.prisma.content.count({
        where: {
          type: "HEALTH_TIP",
          published: true,
        },
      });

    return {
      users,
      nurses,
      questions,
      consultations,
      tips,
    };
  }
}