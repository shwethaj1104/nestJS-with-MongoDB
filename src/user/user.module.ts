import { Module } from '@nestjs/common';
import { UserServiceService } from './user_service/user_service.service';
import { UserContollerController } from './user_contoller/user_contoller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from './models/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([userEntity]),
  ],
  providers: [UserServiceService],
  controllers: [UserContollerController]
})
export class UserModule {}
