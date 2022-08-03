import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from 'shared/repositories/role.repository';
@Injectable()
export class DeleteRoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ) {}

  async remove(id: string) {
    await this.repository.deleteRole(id);
  }
}
