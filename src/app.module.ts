import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { NotesModule } from './notes/notes.module';
import { ReminderModule } from './reminder/reminder.module';

@Module({
  imports: [PrismaModule, NotesModule, ReminderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
