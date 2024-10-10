import { Injectable } from '@nestjs/common';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReminderService {
  constructor(private readonly prisma: PrismaService) {}
  create(createReminderDto: CreateReminderDto) {
    return this.prisma.reminder.create({ data: createReminderDto });
  }

  async findAll() {
    return await this.prisma.reminder.findMany();
  }

  findOne(id: string) {
    return this.prisma.reminder.findUnique({ where: { id } });
  }

  update(id: string, updateReminderDto: UpdateReminderDto) {
    return this.prisma.reminder.update({
      where: { id },
      data: updateReminderDto,
    });
  }

  remove(id: string) {
    return this.prisma.reminder.delete({ where: { id } });
  }
}
