import { Module } from '@nestjs/common';

import { PrismaModule } from './database/prisma.module';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { NursesModule } from './nurses/nurses.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { ConsultationsModule } from './consultations/consultations.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { HealthTopicsModule } from "./health-topics/health-topics.module";
import { ContentModule } from "./content/content.module";
import { AdminModule } from "./admin/admin.module";

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    NursesModule,
    QuestionsModule,
    AnswersModule,
    ConsultationsModule,
    NotificationsModule,
    SpecialtiesModule,
    HealthTopicsModule,
    ContentModule,
    AdminModule,
  ],
})
export class AppModule {}
