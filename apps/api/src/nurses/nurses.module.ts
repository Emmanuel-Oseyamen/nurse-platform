import { Module } from '@nestjs/common';

import { NursesController } from './nurses.controller';
import { NursesService } from './nurses.service';

import { PrismaModule } from '../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NursesController],
  providers: [NursesService],
})
export class NursesModule {}