import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRoleRepository } from 'shared/repositories/userRole.repository';

@Injectable()
export class GetAllUserRoleService {
  constructor(
    @InjectRepository(UserRoleRepository)
    private repository: UserRoleRepository,
  ) {}

  async findAll() {
    return this.repository.findAllUserRole();
  }
}
