import { Module } from '@nestjs/common';

import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';

import { PrismaModule } from '../database/prisma.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    PrismaModule,
    NotificationsModule,
  ],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}