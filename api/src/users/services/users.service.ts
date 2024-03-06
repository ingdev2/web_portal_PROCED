import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserRole } from '../../user_roles/entities/user_role.entity';
import { UserRolType } from '../../common/enums/user_roles.enum';
import { CreateUserPersonDto } from '../dto/create_user_person.dto';
import { UpdateUserPersonDto } from '../dto/update_user_person.dto';
import { CreateUserEpsDto } from '../dto/create_user_eps.dto';
import { UpdateUserEpsDto } from '../dto/update_user_eps.dto';
import { UpdatePasswordUserDto } from '../dto/update_password_user.dto';

import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
  ) {}

  // CREATE FUNTIONS //

  async createUserPerson(userPerson: CreateUserPersonDto) {
    const userPersonFound = await this.userRepository.findOne({
      where: {
        id_number: userPerson.id_number,
      },
    });

    if (userPersonFound) {
      return new HttpException(
        `El usuario con número de identificación ${userPerson.id_number} ya está registrado.`,
        HttpStatus.CONFLICT,
      );
    }

    const rolePersonFound = await this.userRoleRepository.findOne({
      where: {
        name: UserRolType.PATIENT,
      },
    });

    if (!rolePersonFound) {
      throw new HttpException(
        'El rol "Paciente" no existe.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const insertRoleUserPerson = await this.userRepository.create({
      ...userPerson,
      user_role: rolePersonFound.id,
    });

    const userPersonWithRole =
      await this.userRepository.save(insertRoleUserPerson);

    const userRolePerson = await this.userRoleRepository.findOne({
      where: {
        id: userPersonWithRole.user_role,
        name: UserRolType.PATIENT,
      },
    });

    if (!userRolePerson) {
      throw new HttpException(
        'El usuario debe tener el rol "Paciente".',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    await this.userRepository.update(userPersonWithRole.id, userPerson);

    const newUserPerson = await this.userRepository.findOne({
      where: { id: userPersonWithRole.id },
    });

    return newUserPerson;
  }

  async createUserEps(userEps: CreateUserEpsDto) {
    const userEpsFound = await this.userRepository.findOne({
      where: {
        id_number: userEps.id_number,
      },
    });

    if (userEpsFound) {
      return new HttpException(
        `El usuario con número de identificación ${userEps.id_number} ya está registrado.`,
        HttpStatus.CONFLICT,
      );
    }

    const roleEpsFound = await this.userRoleRepository.findOne({
      where: {
        name: UserRolType.EPS,
      },
    });

    if (!roleEpsFound) {
      throw new HttpException(
        'El rol "Eps" no existe.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const insertRoleUserEps = await this.userRepository.create({
      ...userEps,
      user_role: roleEpsFound.id,
    });

    const userEpsWithRole = await this.userRepository.save(insertRoleUserEps);

    const userRoleEps = await this.userRoleRepository.findOne({
      where: {
        id: userEpsWithRole.user_role,
        name: UserRolType.EPS,
      },
    });

    if (!userRoleEps) {
      throw new HttpException(
        'El usuario debe tener el rol "Eps".',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    await this.userRepository.update(userEpsWithRole.id, userEps);

    const newUserEps = await this.userRepository.findOne({
      where: { id: userEpsWithRole.id },
    });

    return newUserEps;
  }

  // GET FUNTIONS //

  async getAllUsersPerson() {
    const userRolePerson = await this.userRoleRepository.findOne({
      where: {
        name: UserRolType.PATIENT,
      },
    });

    if (userRolePerson) {
      const allUsersPerson = await this.userRepository.find({
        where: {
          role: userRolePerson,
          is_active: true,
        },
        order: {
          name: 'ASC',
        },
      });

      if (!allUsersPerson.length) {
        return new HttpException(
          `No hay usuarios registrados en la base de datos`,
          HttpStatus.CONFLICT,
        );
      } else {
        return allUsersPerson;
      }
    } else {
      throw new HttpException(
        'No hay role creado de "Paciente".',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllUsersEps() {
    const userRoleEps = await this.userRoleRepository.findOne({
      where: {
        name: UserRolType.EPS,
      },
    });

    if (userRoleEps) {
      const allUsersEps = await this.userRepository.find({
        where: {
          role: userRoleEps,
          is_active: true,
        },
        order: {
          name: 'ASC',
        },
      });

      if (!allUsersEps.length) {
        return new HttpException(
          `No hay usuarios registrados en la base de datos`,
          HttpStatus.CONFLICT,
        );
      } else {
        return allUsersEps;
      }
    } else {
      throw new HttpException(
        'No hay role creado de "Eps".',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUsersById(id: string) {
    const userPersonFound = await this.userRepository.findOne({
      where: {
        id: id,
        is_active: true,
      },
      relations: ['medical_req'],
    });

    if (!userPersonFound) {
      return new HttpException(
        `El usuario con número de ID: ${id} no esta registrado.`,
        HttpStatus.CONFLICT,
      );
    } else {
      return userPersonFound;
    }
  }

  async getUsersByIdNumber(idNumber: number) {
    const userFound = await this.userRepository.findOne({
      where: {
        id_number: idNumber,
        is_active: true,
      },
    });

    if (!userFound) {
      return new HttpException(
        `El usuario con número de identificación personal: ${idNumber} no esta registrado.`,
        HttpStatus.CONFLICT,
      );
    } else {
      return userFound;
    }
  }

  async getUserFoundByIdNumber(idNumber: number) {
    return await this.userRepository.findOneBy({ id_number: idNumber });
  }

  async getUserFoundByIdNumberWithPassword(idNumber: number) {
    return await this.userRepository.findOne({
      where: { id_number: idNumber },
      select: ['id', 'name', 'id_number', 'password', 'role'],
    });
  }

  // UPDATE FUNTIONS //

  async updateUserPerson(id: string, userPerson: UpdateUserPersonDto) {
    const userFound = await this.userRepository.findOneBy({ id });

    if (!userFound) {
      return new HttpException(
        `Usuario no encontrado.`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const userRolePerson = await this.userRoleRepository.findOne({
      where: {
        name: UserRolType.PATIENT,
      },
    });

    if (userFound.user_role !== userRolePerson.id) {
      return new HttpException(
        `No tienes permiso para actualizar este usuario.`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const updateUserPerson = await this.userRepository.update(id, userPerson);

    if (updateUserPerson.affected === 0) {
      return new HttpException(`Usuario no encontrado`, HttpStatus.CONFLICT);
    }

    return new HttpException(
      `¡Datos guardados correctamente!`,
      HttpStatus.ACCEPTED,
    );
  }

  async updateUserEps(id: string, userEps: UpdateUserEpsDto) {
    const userFound = await this.userRepository.findOneBy({ id });

    if (!userFound) {
      return new HttpException(
        `Usuario no encontrado.`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const userRoleEps = await this.userRoleRepository.findOne({
      where: {
        name: UserRolType.EPS,
      },
    });

    if (userFound.user_role !== userRoleEps.id) {
      return new HttpException(
        `No tienes permiso para actualizar este usuario.`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const updateUserEps = await this.userRepository.update(id, userEps);

    if (updateUserEps.affected === 0) {
      return new HttpException(`Usuario no encontrado`, HttpStatus.CONFLICT);
    }

    return new HttpException(
      `¡Datos guardados correctamente!`,
      HttpStatus.ACCEPTED,
    );
  }

  async updateUserPassword(id: string, passwords: UpdatePasswordUserDto) {
    const userFound = await this.userRepository
      .createQueryBuilder('user')
      .addSelect(['user.password'])
      .where('user.id = :id', { id })
      .getOne();

    if (!userFound) {
      throw new HttpException(
        `Usuario no encontrado.`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isPasswordValid = await bcryptjs.compare(
      passwords.oldPassword,
      userFound.password,
    );
    if (!isPasswordValid) {
      throw new HttpException(
        `Contraseña antigua incorrecta.`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isNewPasswordSameAsOld = await bcryptjs.compare(
      passwords.newPassword,
      userFound.password,
    );
    if (isNewPasswordSameAsOld) {
      throw new HttpException(
        `La nueva contraseña no puede ser igual a la antigua.`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedNewPassword = await bcryptjs.hash(passwords.newPassword, 10);

    await this.userRepository.update(id, { password: hashedNewPassword });

    return new HttpException(
      `Contraseña actualizada correctamente.`,
      HttpStatus.ACCEPTED,
    );
  }

  // DELETED-BAN FUNTIONS //

  async banUsers(id: string) {
    const userFound = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!userFound) {
      return new HttpException(
        `El usuario con número de ID: ${id} no esta registrado.`,
        HttpStatus.CONFLICT,
      );
    }

    userFound.is_active = !userFound.is_active;

    await this.userRepository.save(userFound);

    return new HttpException(
      `El usuario con número de identidad: ${userFound.id_number} está con estado activo: ${userFound.is_active}`,
      HttpStatus.CONFLICT,
    );
  }
}
