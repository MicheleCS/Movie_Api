import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleRequestDTO } from 'shared/dto/role/createRoleRequest.dto';
import { RoleRepository } from 'shared/repositories/role.repository';

@Injectable()
export class CreateRoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ) {}

  async create(dto: CreateRoleRequestDTO) {
    return await this.repository.createRole(dto);
  }
}
