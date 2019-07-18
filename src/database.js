import {Pool} from 'pg';
import dotenv from 'dotenv'

const pool = new Pool({connectionString: process.env.url});


const createTables = async () => {
  console.log('pool');
  const users = `CREATE TABLE IF NOT EXISTS users (
     id serial PRIMARY KEY UNIQUE,
     firstName TEXT NOT NULL,
     lastName TEXT NOT NULL,
     email TEXT NOT NULL UNIQUE,
     password TEXT NOT NULL,
     phoneNumber TEXT NOT NULL UNIQUE,
     isAdmin boolean DEFAULT false,
     createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   )`;

  const properties = `CREATE TABLE IF NOT EXISTS properties (
     id serial PRIMARY KEY,
     title TEXT NOT NULL,
     status TEXT NOT NULL DEFAULT 'available',
     type TEXT NOT NULL,
     price DECIMAL NOT NULL,
     address TEXT,
     state TEXT,
     imageUrl TEXT,
     description TEXT,
     ownerEmail TEXT NOT NULL,
     ownerPhoneNumber TEXT NOT NULL,
     ownerId INTEGER REFERENCES users (id) ON DELETE CASCADE,
     createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   )`;

  //  async runSql(sql, data=[]) {
  //   const connection = await pool.connect();
  //  }
  await pool.query(users);
  console.log('users created');
  await pool.query(properties);
  console.log('properties created');
  await pool.query(flags);
  console.log('flags created');
};
