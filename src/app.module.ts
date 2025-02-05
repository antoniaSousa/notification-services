import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import {HttpModule} from './http.module';
import { CreateNotificationBody } from './create.notification.body';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService, CreateNotificationBody],
  

})
export class AppModule {}
