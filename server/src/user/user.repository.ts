import { Inject, Injectable } from '@nestjs/common';
import { DatabaseToken } from '../database/database.constants';
import { Collection, Db } from 'mongodb';

const UserCollectionName = 'user';

@Injectable()
export class UserRepository {
  private coll: Collection;

  constructor(@Inject(DatabaseToken) private db: Db) {
    this.coll = this.db.collection(UserCollectionName);
  }

  async save() {}

  async findById() {}

  async findByEmail() {}
}
