import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'shared/database/entities/role.entity';
import { RoleRepository } from 'shared/repositories/role.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class GetOneRoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ) {}

  async findOne(id: string) {
    const role = this.repository.findOneRole(id);
    if (!role) throw new EntityNotFoundError(Role, id);
    return this.repository.findOneRole(id);
  }
}
