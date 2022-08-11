import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from 'shared/database/entities/userRole.entity';
import { UserRoleRepository } from 'shared/repositories/userRole.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class DeleteUserRoleService {
  constructor(
    @InjectRepository(UserRoleRepository)
    private repository: UserRoleRepository,
  ) {}

  async remove(id: string) {
    const userRole = this.repository.findOneUserRole(id);
    if (!userRole) throw new EntityNotFoundError(UserRole, id);
    await this.repository.deleteUserRole(id);
  }
}
