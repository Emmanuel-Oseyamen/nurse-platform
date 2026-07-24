import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
} from "class-validator";

import { ContentType } from "@prisma/client";

export class CreateContentDto {
  @IsString()
  title!: string;

  @IsString()
  excerpt!: string;

  @IsString()
  content!: string;

  @IsOptional()
  @IsString()
  coverImage?: string;

  @IsEnum(ContentType)
  type!: ContentType;

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  published?: boolean;
}