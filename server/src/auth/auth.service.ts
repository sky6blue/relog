import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { hash } from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { MongoError } from 'mongodb';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {
    // this.register({
    //   name: 'nik',
    //   email: 'nik222@mail.com',
    //   password: 'abc123',
    // });
  }

  async register(registerData: RegisterDto) {
    const hashedPassword = await hash('asd', 10);
    try {
      const user = await this.userService.create({
        ...registerData,
        password: hashedPassword,
      });
      delete user.password;
      return user;
    } catch (e) {
      if (e instanceof MongoError) {
      }
    }
    console.log(hashedPassword);
  }
}
