import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateAdminDto } from '../../admins/dto/create_admin.dto';
import { CreateUserPersonDto } from '../../users/dto/create_user_person.dto';
import { CreateAuthorizedFamiliarDto } from '../../authorized_familiar/dto/create-authorized_familiar.dto';
import { CreateUserEpsDto } from '../../users/dto/create_user_eps.dto';
import { LoginDto } from '../dto/login.dto';

import { ApiTags } from '@nestjs/swagger';
import { UUID } from 'crypto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST METHODS //

  // REGISTER

  @Post('registerSuperAdmin')
  async registerSuperAdmin(@Body() registerSuperAdmin: CreateAdminDto) {
    return await this.authService.registerSuperAdmin(registerSuperAdmin);
  }

  @Post('registerAdmin')
  async registerAdmin(@Body() registerAdmin: CreateAdminDto) {
    return await this.authService.registerAdmin(registerAdmin);
  }

  @Post('registerUserPerson')
  async registerUserPerson(@Body() registerUserPerson: CreateUserPersonDto) {
    return await this.authService.registerUserPerson(registerUserPerson);
  }

  @Post(':userId/registerFamiliar')
  async registerFamiliar(
    @Param('userId') userId: UUID,
    @Body() registerFamiliar: CreateAuthorizedFamiliarDto,
  ) {
    return await this.authService.registerFamiliar(userId, registerFamiliar);
  }

  @Post('registerUserEps')
  async registerUserEps(@Body() registerUserEps: CreateUserEpsDto) {
    return await this.authService.registerUserEps(registerUserEps);
  }

  // LOGIN

  @Post('loginAdmins')
  async loginAdmins(@Body() loginUser: LoginDto) {
    return await this.authService.loginAdmins(loginUser);
  }

  @Post('loginUsers')
  async loginUsers(@Body() loginAdmin: LoginDto) {
    return await this.authService.loginUsers(loginAdmin);
  }

  @Post('verifiedLoginUsers/:idNumber')
  async verifyCodeAndLoginUsers(
    @Param('idNumber') idNumber: number,
    @Body('verification_code') verification_code: number,
  ) {
    return await this.authService.verifyCodeAndLoginUsers(
      idNumber,
      verification_code,
    );
  }

  // FORMAS DE AUTH ROLES //

  // OPCION 1

  // @Get('profile')
  // @Roles(UserRolType.EPS)
  // @UseGuards(AuthGuard, RolesGuard)
  // profile(@Req() req: RequestWithUser) {
  //   return this.authService.profileUser(req.user);
  // }

  // OPCION 1

  // @Get('profile')
  // @Auth(UserRolType.PERSON)
  // profile(@ActiveUser() user: UserActiveInterface) {
  //   return this.authService.profileUser(user);
  // }
}
