import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepo } from 'src/shared/repo/user.repo';

@Module({
  
  imports: [
    TypeOrmModule.forFeature([UserRepo]),
  ],

  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
