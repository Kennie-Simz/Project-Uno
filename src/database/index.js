import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.HEROKU_USER || 'postgres',
  host: process.env.HEROKU_HOST || 'localhost',
  database: process.env.HEROKU_DB ||  'projectuno',
  password: process.env.HEROKU_PASS || '0703625710',
  port: 5432
});

export default pool; 