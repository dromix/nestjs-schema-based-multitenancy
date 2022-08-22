import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { MenuModule } from './modules/menu/menu.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { DeliveryModule } from './modules/delivery/delivery.module';

@Module({
  imports: [MenuModule, DatabaseModule, DeliveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
