import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'projectuno',
  password: '0703625710',
  port: 5432
});

export default pool;