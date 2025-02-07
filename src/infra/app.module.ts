import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { PrismaService } from '../entities/prisma.service';
import { Content } from '../entities/content';
// import {HttpModule} from '../http.module';
import { CreateNotificationBody } from '../create.notification.body';

@Module({
  // imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService, CreateNotificationBody, Content],
})
export class AppModule {}
