import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { roles } from 'shared/constants/roles';
import { UserRole } from 'shared/database/entities/userRole.entity';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<roles[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    const roles = [];

    user.userRoles.forEach((accountRole: UserRole) => {
      roles.push(accountRole.role.name);
    });

    return requiredRoles.some((role) => roles.includes(role));
  }
}
