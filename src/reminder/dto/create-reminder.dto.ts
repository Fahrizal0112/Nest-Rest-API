import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateReminderDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  time: Date;
}
