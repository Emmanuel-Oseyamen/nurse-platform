import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class HealthTopicsService {
  constructor(private prisma: PrismaService) {}

  findAll(category?: string) {
    return this.prisma.healthTopic.findMany({
      where: category
        ? { category }
        : undefined,

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  findOne(slug: string) {
    return this.prisma.healthTopic.findUnique({
      where: {
        slug,
      },
    });
  }

  featured() {
    return this.prisma.healthTopic.findMany({
      where: {
        featured: true,
      },
    });
  }
}