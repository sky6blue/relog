import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserCreateDto } from './dto/UserCreate.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(userData: UserCreateDto) {}

  async findById() {}
}
