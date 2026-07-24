import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class NursesService {
  constructor(private prisma: PrismaService) {}

  async createProfile(
    userId: string,
    data: {
      bio?: string;
      specialtyIds: string[];
      yearsExperience?: number;
      consultationFee?: number;
    },
  ) {
    return this.prisma.nurseProfile.create({
      data: {
        userId,
        bio: data.bio,
        yearsExperience: data.yearsExperience,
        consultationFee: data.consultationFee,

        specialties: {
          create: data.specialtyIds.map((id) => ({
            specialty: {
              connect: {
                id,
              },
            },
          })),
        },
      },

      include: {
        specialties: {
          include: {
            specialty: true,
          },
        },
      },
    });
  }

  async findAll(specialty?: string) {
    return this.prisma.nurseProfile.findMany({
      where: specialty
        ? {
            specialties: {
              some: {
                specialty: {
                  name: specialty,
                },
              },
            },
          }
        : {},

      include: {
        user: true,

        specialties: {
          include: {
            specialty: true,
          },
        },
      },
    });
  }
}