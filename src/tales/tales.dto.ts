import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class TalesDto {
  @IsOptional()
  readonly id: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
