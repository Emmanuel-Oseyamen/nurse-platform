import { Controller, Get, Param, Query } from "@nestjs/common";
import { HealthTopicsService } from "./health-topics.service";

@Controller("health-topics")
export class HealthTopicsController {
  constructor(private service: HealthTopicsService) {}

  @Get()
  findAll(@Query("category") category?: string) {
    return this.service.findAll(category);
  }

  @Get("featured")
  featured() {
    return this.service.featured();
  }

  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return this.service.findOne(slug);
  }
}