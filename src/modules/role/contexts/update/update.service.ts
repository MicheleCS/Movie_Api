import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'shared/database/entities/role.entity';
import { UpdateRoleRequestDTO } from 'shared/dto/role/updateRoleRequest.dto';
import { RoleRepository } from 'shared/repositories/role.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class UpdateRoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private repository: RoleRepository,
  ) {}

  async update(dto: UpdateRoleRequestDTO): Promise<void> {
    const findedRole = await this.repository.findOneRole(dto.id);
    if (!findedRole) {
      throw new EntityNotFoundError(Role, dto.id);
    }

    await this.repository.updateRole(dto);
  }
}
