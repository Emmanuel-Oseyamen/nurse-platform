import { Controller, Post, Get, Body, Param, Req, UseGuards } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

interface AuthRequest extends Request {
  user: {
    id: string;
    email: string;
    role: string;
  };
}

interface CreateAnswerDto {
  questionId: string;
  content: string;
}

@Controller('answers')
export class AnswersController {
  constructor(private service: AnswersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: AuthRequest, @Body() dto: CreateAnswerDto) {
    return this.service.create(req.user.id, dto);
  }

  @Get('question/:id')
  findByQuestion(@Param('id') id: string) {
    return this.service.findByQuestion(id);
  }
}