import { Module } from '@nestjs/common';
import { DatabaseToken } from './database.constants';
import { Db, MongoClient } from 'mongodb';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DatabaseToken,
      inject: [ConfigService],
      useFactory: async (cfg: ConfigService): Promise<Db> => {
        try {
          console.log('connect to mongo');
          const cl = await MongoClient.connect(cfg.get('MONGO_URL'));
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
