import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { RoleRepository } from 'shared/repositories/role.repository';
import { UserRepository } from 'shared/repositories/user.repository';
import { UserRoleRepository } from 'shared/repositories/userRole.repository';
import { CreateUserRoleController } from './contexts/create/create.controller';
import { CreateUserRoleService } from './contexts/create/create.service';
import { DeleteUserRoleController } from './contexts/delete/delete.controller';
import { DeleteUserRoleService } from './contexts/delete/delete.service';
import { GetAllUserRoleController } from './contexts/getAll/getAll.controller';
import { GetAllUserRoleService } from './contexts/getAll/getAll.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRoleRepository,
      UserRepository,
      RoleRepository,
    ]),
  ],
  controllers: [
    CreateUserRoleController,
    DeleteUserRoleController,
    GetAllUserRoleController,
  ],
  providers: [
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider },
    CreateUserRoleService,
    DeleteUserRoleService,
    GetAllUserRoleService,
  ],
})
export class UserRoleModule {}
