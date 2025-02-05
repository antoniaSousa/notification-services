import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create.notification.body';

@Controller('notifications')
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list(){
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody){
    const {recipientId, content, category} = body

  await this.prisma.notification.create({
    data: {
    // id: randomUUID(),
    content: 'Voce recebeu uma nova notificacao',
    category: 'social',
    recipientId: randomUUID(),
    },
  });
  }
}
 9