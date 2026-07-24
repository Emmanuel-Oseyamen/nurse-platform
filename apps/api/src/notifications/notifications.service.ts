// src/notifications/notifications.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, title: string, message: string) {
    return this.prisma.notification.create({
      data: {
        userId,
        title,
        message,
      },
    });
  }

  findMine(userId: string) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  markRead(id: string) {
    return this.prisma.notification.update({
      where: { id },
      data: { read: true },
    });
  }
}