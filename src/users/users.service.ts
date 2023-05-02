import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 0,
      name: 'John',
    },
    {
      id: 1,
      name: 'Rohan',
    },
  ]

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter(user => user.name === name)
    } else {
      return this.users
    }
  }

  findById(id: number): User {
    return this.users.find(user => user.id === id)
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: new Date(),
      ...createUserDto
    }
    this.users.push(newUser)
    return newUser
  }
}

