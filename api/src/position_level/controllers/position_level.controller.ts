import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PositionLevelService } from '../services/position_level.service';
import { CreatePositionLevelDto } from '../dto/create-position_level.dto';
import { UpdatePositionLevelDto } from '../dto/update-position_level.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorators/auth.decorator';
import { AdminRolType } from '../../common/enums/admin_roles.enum';

@ApiTags('position-level')
@ApiBearerAuth()
@Auth(AdminRolType.SUPER_ADMIN, AdminRolType.ADMIN)
@Controller('position-level')
export class PositionLevelController {
  constructor(private readonly positionLevelService: PositionLevelService) {}

  // POST METHODS //

  @Post('/create')
  createPositionLevel(@Body() createPositionLevel: CreatePositionLevelDto) {
    return this.positionLevelService.createPositionLevel(createPositionLevel);
  }

  // GET METHODS //

  @Get('/getAll')
  getAllPositionLevel() {
    return this.positionLevelService.getAllPositionLevel();
  }

  // PATCH METHODS //

  @Patch('/update/:id')
  updatePositionLevel(
    @Param('id') id: number,
    @Body() updatePositionLevel: UpdatePositionLevelDto,
  ) {
    return this.positionLevelService.updatePositionLevel(
      id,
      updatePositionLevel,
    );
  }
}
