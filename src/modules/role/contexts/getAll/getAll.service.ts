import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from 'shared/repositories/role.repository';

@Injectable()
export class GetAllRoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ) {}

  async findAll() {
    return this.repository.findAllRole();
  }
}
