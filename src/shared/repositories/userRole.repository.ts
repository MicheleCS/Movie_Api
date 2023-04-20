import { UserRole } from 'shared/database/entities/userRole.entity';
import { CreateUserRoleDTO } from 'shared/dto/userRole/createUserRole.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserRole)
export class UserRoleRepository extends Repository<UserRole> {
  async createUserRole(dto: CreateUserRoleDTO): Promise<UserRole> {
    const userRole = this.create(dto);
    return this.save(userRole);
  }

  async findAllUserRole(): Promise<UserRole[] | undefined> {
    return this.find();
  }

  async deleteUserRole(id: string): Promise<void> {
    await this.delete(id);
  }

  async findOneUserRole(id: string): Promise<UserRole | undefined> {
    return this.findOne(id);
  }
}
