import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { RoleRepository } from 'shared/repositories/role.repository';
import { CreateRoleController } from './contexts/create/create.controller';
import { CreateRoleService } from './contexts/create/create.service';
import { DeleteRoleController } from './contexts/delete/delete.controller';
import { DeleteRoleService } from './contexts/delete/service.controller';
import { GetAllRoleController } from './contexts/getAll/getAll.controller';
import { GetAllRoleService } from './contexts/getAll/getAll.service';
import { GetOneRoleController } from './contexts/getOne/getOne.controller';
import { GetOneRoleService } from './contexts/getOne/getOne.service';
import { UpdateRoleController } from './contexts/update/update.controller';
import { UpdateRoleService } from './contexts/update/update.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  controllers: [
    CreateRoleController,
    DeleteRoleController,
    GetAllRoleController,
    GetOneRoleController,
    UpdateRoleController,
  ],
  providers: [
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider },
    CreateRoleService,
    DeleteRoleService,
    GetAllRoleService,
    GetOneRoleService,
    UpdateRoleService,
  ],
})
export class RoleModule {}
