import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserController } from './create/create.controller';
import { DeleteUserController } from './delete/delete.controller';
import { GetOneUserController } from './getOne/getOne.controller';
import { UpdateUserController } from './update/update.controller';

@Module({
  imports: [TypeOrmModule],
  controllers:[CreateUserController,
  DeleteUserController,
  GetOneUserController,
  UpdateUserController]
  
})
export class UserModule {}
