import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

class Database {
  constructor() {
    this.pool = new Pool({ connectionString: process.env.url });
    this.connect = async () => this.pool.connect();
  }

  async execute(sql, data = []) {
    const connection = await this.connect();
    try {
      if (data.length) return await connection.query(sql, data);
      // eslint-disable-next-line no-mixed-spaces-and-tabs
      return await connection.query(sql);
      // eslint-disable-next-line no-mixed-spaces-and-tabs
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  }
}

export default new Database();
