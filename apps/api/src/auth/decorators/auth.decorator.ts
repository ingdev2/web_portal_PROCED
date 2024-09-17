import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guard/auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from './roles.decorator';
import { AdminRolType } from 'shared/utils/enums/admin_roles.enum';
import { UserRolType } from 'shared/utils/enums/user_roles.enum';

export function Auth(...roles: (AdminRolType | UserRolType)[]) {
  return applyDecorators(Roles(...roles), UseGuards(AuthGuard, RolesGuard));
}
