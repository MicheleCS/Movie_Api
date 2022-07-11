import { getDatabaseConfigConnection } from '@config/env/connection';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'modules/users/contexts/user.module';
import { HealthModule } from './modules/health/health.module';

const databaseOptions = {
  ...getDatabaseConfigConnection(),
};
@Module({
  imports: [HealthModule, 
    TypeOrmModule.forRoot(databaseOptions), 
    UserModule],
  })
export class AppModule { }
