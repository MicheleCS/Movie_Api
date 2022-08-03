import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from 'shared/repositories/role.repository';

@Injectable()
export class GetOneRoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ) {}

  async findOne(id: string) {
    return this.repository.findOneRole(id);
  }
}
