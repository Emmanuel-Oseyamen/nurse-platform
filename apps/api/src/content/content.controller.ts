import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";

import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles.decorator";

import { ContentService } from "./content.service";
import { CreateContentDto } from "./dto/create-content.dto";

@Controller("content")
export class ContentController {
  constructor(
    private readonly contentService: ContentService,
  ) {}

  // =====================================================
  // CREATE CONTENT
  // Only nurses and admins can publish content
  // =====================================================

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("NURSE", "ADMIN")
  @Post()
  create(
    @Req() req: any,
    @Body() dto: CreateContentDto,
  ) {
    return this.contentService.create(
      req.user.id,
      dto,
    );
  }

  // =====================================================
  // GET MY CONTENT
  // IMPORTANT: Must be before @Get(":id")
  // =====================================================

  @UseGuards(JwtAuthGuard)
  @Get("mine")
  mine(@Req() req: any) {
    return this.contentService.mine(req.user.id);
  }

  // =====================================================
  // GET TODAY'S HEALTH TIP
  // =====================================================

  @Get("today")
  today() {
    return this.contentService.today();
  }

  // =====================================================
  // GET FEATURED CONTENT
  // =====================================================

  @Get("featured")
  featured() {
    return this.contentService.featured();
  }

  // =====================================================
  // GET ALL PUBLISHED CONTENT
  // =====================================================

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  // =====================================================
  // LIKE / UNLIKE CONTENT
  // =====================================================

  @UseGuards(JwtAuthGuard)
  @Post(":id/like")
  like(
    @Param("id") id: string,
    @Req() req: any,
  ) {
    return this.contentService.like(
      id,
      req.user.id,
    );
  }

  // =====================================================
  // COMMENT ON CONTENT
  // =====================================================

  @UseGuards(JwtAuthGuard)
  @Post(":id/comment")
  comment(
    @Param("id") id: string,
    @Req() req: any,
    @Body() body: { content: string },
  ) {
    return this.contentService.comment(
      id,
      req.user.id,
      body.content,
    );
  }

  // =====================================================
  // DELETE CONTENT
  // =====================================================

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  delete(
    @Param("id") id: string,
    @Req() req: any,
  ) {
    return this.contentService.delete(
      id,
      req.user.id,
    );
  }

  // =====================================================
  // GET SINGLE CONTENT
  // IMPORTANT: Dynamic :id route MUST BE LAST
  // =====================================================

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.contentService.findOne(id);
  }
}