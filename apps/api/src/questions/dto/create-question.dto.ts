import { IsEnum, IsString } from 'class-validator';
import { QuestionVisibility } from '@prisma/client';

export class CreateQuestionDto {
  @IsString()
  title!: string;

  @IsString()
  content!: string;

  @IsEnum(QuestionVisibility)
  visibility!: QuestionVisibility;
}