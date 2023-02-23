import { Inject, Injectable } from '@nestjs/common';
import { DatabaseToken } from '../database/database.constants';
import { Db } from 'mongodb';

@Injectable()
export class UserRepository {
  constructor(@Inject(DatabaseToken) private db: Db) {}

  async save() {}

  async findOne() {}
}
