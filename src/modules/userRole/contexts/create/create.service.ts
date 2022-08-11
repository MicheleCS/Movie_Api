import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'shared/database/entities/role.entity';
import { User } from 'shared/database/entities/user.entity';
import { CreateUserRoleRequestDTO } from 'shared/dto/userRole/createUserRoleRequest.dto';
import { RoleRepository } from 'shared/repositories/role.repository';
import { UserRepository } from 'shared/repositories/user.repository';
import { UserRoleRepository } from 'shared/repositories/userRole.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class CreateUserRoleService {
  constructor(
    @InjectRepository(UserRoleRepository)
    private repository: UserRoleRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectRepository(RoleRepository)
    private roleRepository: RoleRepository,
  ) {}

  async execute(dto: CreateUserRoleRequestDTO) {
    const user = await this.userRepository.findOneUser(dto.user_id);
    if (!user) throw new EntityNotFoundError(User, dto.user_id);

    const role = await this.roleRepository.findOneRole(dto.role_id);
    if (!role) throw new EntityNotFoundError(Role, dto.role_id);

    return this.repository.createUserRole({ user, role });
  }
}
