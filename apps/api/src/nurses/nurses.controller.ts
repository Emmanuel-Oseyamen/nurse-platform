import { Request } from 'express';
import { Body, Controller, Get, Post, Req, Query, UseGuards } from '@nestjs/common';
import { NursesService } from './nurses.service';
import { CreateNurseProfileDto } from './dto/create-nurse-profile.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';


@Controller('nurses')
export class NursesController {
  constructor(private readonly nursesService: NursesService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('profile')
  @Roles('NURSE')
  createProfile(
    @Req() req: any,
    @Body() dto: CreateNurseProfileDto,
  ) {
    const userId = req.user.id;

    return this.nursesService.createProfile(userId, dto);
  }

  @Get()
  findAll(@Query('specialty') specialty?: string) {
    return this.nursesService.findAll(specialty);
  }
}