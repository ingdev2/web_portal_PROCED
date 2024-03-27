import {
  IsNotEmpty,
  IsEmail,
  IsNumber,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateAuthorizedFamiliarDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  last_name: string;

  @IsNotEmpty()
  @IsNumber()
  id_number: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  cellphone: number;

  @IsOptional()
  @IsNumber()
  whatsapp: number;

  @IsOptional()
  rel_with_patient: number;

  @IsOptional()
  user_role: number;

  @IsNotEmpty()
  user_gender: number;

  @IsNotEmpty()
  user_id_type: number;

  @IsOptional()
  @IsNumber()
  verification_code: number;
}
