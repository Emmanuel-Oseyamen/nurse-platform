import { Controller, Get, Body, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ConsultationsService } from './consultations.service';

@Controller("consultations")
export class ConsultationsController {
  constructor(
    private readonly consultationsService: ConsultationsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req() req: any,
    @Body() dto: any,
  ) {
    return this.consultationsService.create(
      req.user.id,
      dto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get("mine")
  findMine(@Req() req: any) {
    return this.consultationsService.findMine(
      req.user.id,
    );
  }
}