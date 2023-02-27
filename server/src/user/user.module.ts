import { Module } from '@nestjs/common';
import { UserGateway } from './user.gateway';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
  providers: [UserGateway, UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
