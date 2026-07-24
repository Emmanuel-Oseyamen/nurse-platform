import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return this.prisma.user.create({
      data,
    });
  }

  async makeNurse(userId: string) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role: 'NURSE',
      },
    });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        nurseProfile: {
          include: {
            specialties: {
              include: {
                specialty: true,
              },
            },
          },
        },
      },
    });
  }
}