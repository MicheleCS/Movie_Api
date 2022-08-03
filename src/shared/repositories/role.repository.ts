import { Role } from 'shared/database/entities/role.entity';
import { CreateRoleDTO } from 'shared/dto/role/createRole.dto';
import { UpdateRoleRequestDTO } from 'shared/dto/role/updateRoleRequest.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
  async createRole(dto: CreateRoleDTO): Promise<Role> {
    const role = this.create(dto);
    return this.save(role);
  }

  async findAllRole(): Promise<Role[] | undefined> {
    return this.find();
  }

  async findOneRole(id: string): Promise<Role | undefined> {
    return this.findOne({ id });
  }

  async updateRole(dto: UpdateRoleRequestDTO): Promise<void> {
    await this.update(dto.id, dto);
  }

  async deleteRole(id: string): Promise<void> {
    await this.delete(id);
  }
}
