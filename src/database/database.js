import pool from './index';

// self invoking async function
(async () => {
  const dropTables = 'DROP TABLE IF EXISTS users, properties';

  const users = `CREATE TABLE IF NOT EXISTS users (
     id serial PRIMARY KEY,
     firstName VARCHAR(255) NOT NULL,
     lastName  VARCHAR(255) NOT NULL,
     email  VARCHAR(255) NOT NULL UNIQUE,
     password  VARCHAR(255) NOT NULL,
     phoneNumber  VARCHAR(255) NOT NULL UNIQUE,
     address VARCHAR(255) NOT NULL,
     isAdmin boolean DEFAULT false,
     createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   )`;

  const properties = `CREATE TABLE IF NOT EXISTS properties (
     id serial PRIMARY KEY,
     title  VARCHAR(255) NOT NULL,
     status  VARCHAR(255) NOT NULL DEFAULT 'available',
     type  VARCHAR(255) NOT NULL,
     price DECIMAL NOT NULL,
     address TEXT,
     state TEXT,
     imageUrl TEXT,
     description TEXT,
     ownerEmail  VARCHAR(255) NOT NULL,
     ownerPhoneNumber  VARCHAR(255) NOT NULL,
     ownerId INTEGER REFERENCES users (id) ON DELETE CASCADE,
     createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   )`;

  await pool.query(dropTables);
  console.log('Dropping tables');
  await pool.query(users);
  console.log('users created');
  await pool.query(properties);
  console.log('properties created');
})();
