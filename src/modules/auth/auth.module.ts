import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'modules/users/contexts/user.module';
import { BcryptProvider } from 'shared/providers/encrypt/bcrypt.provider';
import { UserRepository } from 'shared/repositories/user.repository';
import { jwtConstants } from './constants';
import { LoginController } from './contexts/login/login.controller';
import { LoginService } from './contexts/login/login.service';
import { JwtAuthGuard } from './guards/jwt-auth.guards';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5d' },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [LoginController],
  providers: [
    JwtAuthGuard,
    LoginService,
    LocalStrategy,
    JwtStrategy,
    { provide: 'ENCRYPT_PROVIDER', useClass: BcryptProvider },
  ],
  exports: [LoginService],
})
export class AuthModule {}
