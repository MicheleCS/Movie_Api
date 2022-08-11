import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { UserRepository } from 'shared/repositories/user.repository';
import { CreateUserController } from './contexts/create/create.controller';
import { CreateUserService } from './contexts/create/create.service';
import { DeleteUserController } from './contexts/delete/delete.controller';
import { DeleteUserService } from './contexts/delete/delete.service';
import { GetAllUserController } from './contexts/getAll/getAll.controller';
import { GetAllUserService } from './contexts/getAll/getAll.service';
import { GetOneUserController } from './contexts/getOne/getOne.controller';
import { GetOneUserService } from './contexts/getOne/getOne.service';
import { UpdateUserController } from './contexts/update/update.controller';
import { UpdateUserService } from './contexts/update/update.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [
    CreateUserController,
    DeleteUserController,
    GetAllUserController,
    GetOneUserController,
    UpdateUserController,
  ],
  providers: [
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider },
    CreateUserService,
    DeleteUserService,
    GetAllUserService,
    GetOneUserService,
    UpdateUserService,
  ],
})
export class UserModule {}
