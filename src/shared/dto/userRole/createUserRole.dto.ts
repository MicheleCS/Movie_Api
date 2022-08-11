import { Role } from 'shared/database/entities/role.entity';
import { User } from 'shared/database/entities/user.entity';

export class CreateUserRoleDTO {
  user: User;
  role: Role;
}
