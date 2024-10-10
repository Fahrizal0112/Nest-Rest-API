import { Module } from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ReminderController],
  providers: [ReminderService],
  imports: [PrismaModule],
})
export class ReminderModule {}
