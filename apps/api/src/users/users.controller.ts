import {
  Controller,
  Param,
  Patch,
  Req,
  Get,
  UseGuards
} from '@nestjs/common';

import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Patch(':id/make-nurse')
  makeNurse(
    @Param('id') id: string,
  ) {
    return this.usersService.makeNurse(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Req() req: any) {
    return this.usersService.findById(req.user.id);
  }
}