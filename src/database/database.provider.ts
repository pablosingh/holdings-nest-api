import { Pool } from 'pg';

export const databaseProviders = [
  {
    provide: 'PG',

    useFactory: async () => {
      const pool = new Pool({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'Pasto140',
        database: 'nestdb',
      });

      await pool.connect();

      console.log('Postgres conectado');

      return pool;
    },
  },
];
