import { Module } from '@nestjs/common';
import { AdminsService } from './services/admins.service';
import { AdminsController } from './controllers/admins.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { AdminRole } from '../admin_roles/entities/admin_role.entity';
import { PositionLevel } from '../position_level/entities/position_level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, AdminRole, PositionLevel])],
  controllers: [AdminsController],
  providers: [AdminsService],
  exports: [AdminsService],
})
export class AdminsModule {}
