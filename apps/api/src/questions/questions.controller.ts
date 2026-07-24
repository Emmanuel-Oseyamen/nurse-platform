import { Body, Controller, Get, Post, Req, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Request } from 'express';

interface AuthRequest extends Request {
  user: {
    id: string;
    email: string;
    role: string;
  };
}

@Controller('questions')
export class QuestionsController {
  constructor(private service: QuestionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: AuthRequest, @Body() dto: CreateQuestionDto) {
    return this.service.create(req.user.id, dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('mine')
  findMine(@Req() req: AuthRequest) {
    return this.service.findMine(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}