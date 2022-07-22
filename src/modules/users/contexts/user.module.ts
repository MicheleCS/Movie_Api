import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { UserRepository } from 'shared/repositories/user.repository';
import { CreateUserController } from './create/create.controller';
import { CreateUserService } from './create/create.service';
import { DeleteUserController } from './delete/delete.controller';
import { DeleteUserService } from './delete/delete.service';
import { GetAllUserController } from './getAll/getAll.controller';
import { GetAllUserService } from './getAll/getAll.service';
import { GetOneUserController } from './getOne/getOne.controller';
import { GetOneUserService } from './getOne/getOne.service';
import { UpdateUserController } from './update/update.controller';
import { UpdateUserService } from './update/update.service';

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
  ]
})
export class UserModule {}
