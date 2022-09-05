import { getDatabaseConfigConnection } from '@config/env/connection';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssessmentModule } from 'modules/assessment/assessment.module';
import { AuthModule } from 'modules/auth/auth.module';
import { MovieModule } from 'modules/movie/movie.module';
import { RoleModule } from 'modules/role/role.module';
import { UserRoleModule } from 'modules/userRole/userRole.module';
import { UserModule } from 'modules/users/user.module';
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
    UserRoleModule,
    MovieModule,
    AssessmentModule,
  ],
})
export class AppModule {}
