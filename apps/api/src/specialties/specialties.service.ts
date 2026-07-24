import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class SpecialtiesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.specialty.findMany({
      include: {
        _count: {
          select: {
            nurses: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}