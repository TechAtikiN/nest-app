import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  id: number;

  @ApiProperty()
  name: string;

  // @ApiProperty({required: false})
  // age: number;
}