import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'shared/database/entities/role.entity';
import { RoleRepository } from 'shared/repositories/role.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class DeleteRoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ) {}

  async remove(id: string) {
    const role = this.repository.findOneRole(id);
    if (!role) throw new EntityNotFoundError(Role, id);
    await this.repository.deleteRole(id);
  }
}
