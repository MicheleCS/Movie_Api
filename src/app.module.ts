import { getDatabaseConfigConnection } from '@config/env/connection';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'modules/auth/auth.module';
import { RoleModule } from 'modules/role/role.module';
import { UserModule } from 'modules/users/contexts/user.module';
import { HealthModule } from './modules/health/health.module';

const databaseOptions = {
  ...getDatabaseConfigConnection(),
};
@Module({
  imports: [
    HealthModule,
    TypeOrmModule.forRoot(databaseOptions),
    UserModule,
    AuthModule,
    RoleModule,
  ],
})
export class AppModule {}
