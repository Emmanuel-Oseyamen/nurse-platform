import { Module } from "@nestjs/common";
import { HealthTopicsController } from "./health-topics.controller";
import { HealthTopicsService } from "./health-topics.service";
import { PrismaModule } from "../database/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [HealthTopicsController],
  providers: [HealthTopicsService],
})
export class HealthTopicsModule {}