import {
  Controller,
  Get,
  UseGuards,
} from "@nestjs/common";

import { AdminService } from "./admin.service";

import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles.decorator";

@Controller("admin")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles("ADMIN")
export class AdminController {
  constructor(
    private adminService: AdminService,
  ) {}

  @Get("users")
  getUsers() {
    return this.adminService.getUsers();
  }

  @Get("stats")
  getStats() {
    return this.adminService.getStats();
  }

}