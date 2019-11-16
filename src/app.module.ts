import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TalesModule } from './tales/tales.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TalesController } from './tales/tales.controller';

@Module({
  imports: [TalesModule, TypeOrmModule.forRoot()],
  controllers: [AppController, TalesController],
  providers: [AppService],
})
export class AppModule {}
