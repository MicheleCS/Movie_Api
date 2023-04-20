import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'modules/auth/guards/local-auth.guard';
import { LoginDTO } from 'shared/dto/login/login.dto';
import { LoginService } from './login.service';

@Controller('auth')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post()
  async login(@Body() loginDTO: LoginDTO) {
    return await this.loginService.login(loginDTO);
  }
}
