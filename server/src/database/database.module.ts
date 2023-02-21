import { Module } from '@nestjs/common';
import { DatabaseToken } from './database.constants';
import { Db, MongoClient } from 'mongodb';

@Module({
  providers: [
    {
      provide: DatabaseToken,
      useFactory: async (): Promise<Db> => {
        try {
          const cl = await MongoClient.connect(
            'mongodb+srv://nik:ybrbnf98@cluster0.ghf666u.mongodb.net/?retryWrites=true&w=majority',
          );
          return cl.db('relog');
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: [DatabaseToken],
})
export class DatabaseModule {}
