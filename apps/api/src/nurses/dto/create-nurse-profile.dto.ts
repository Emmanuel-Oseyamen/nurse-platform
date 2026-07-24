import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateNurseProfileDto {
  @IsOptional()
  @IsString()
  bio?: string;

  @IsArray()
  @IsString({ each: true })
  specialtyIds!: string[];

  @IsOptional()
  @IsNumber()
  yearsExperience?: number;

  @IsOptional()
  @IsNumber()
  consultationFee?: number;
}