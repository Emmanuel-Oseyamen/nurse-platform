import {
  Controller,
  Get,
  Patch,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private notificationsService: NotificationsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getMine(@Req() req: any) {
    return this.notificationsService.findMine(
      req.user.id,
    );
  }

  @Patch(':id/read')
  markRead(@Param('id') id: string) {
    return this.notificationsService.markRead(id);
  }
}