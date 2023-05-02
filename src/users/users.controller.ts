import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiNotFoundResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { NotFoundError } from 'rxjs';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }
  
  @ApiQuery( {name: 'name', required: false} )
  @Get()
  getUsers(@Query('name') name: string): User[]{
    return this.usersService.findAll(name)
  }

  @ApiNotFoundResponse()
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): User {
    
    const user = this.usersService.findById(id)
    
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }

  @Post() 
  createSecureServer(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body)
  }
}
