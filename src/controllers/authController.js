import jwt from 'jsonwebtoken';
import Users from '../models/authModel';
import { APP_SECRET } from '../config';
import pool from '../database';

class authController {
  static getUsers(req, res) {
    return res.json({
      message: 'List of all users',
      users: Users,
    });
  }

  static logUsers(req, res) {
    const { email, password } = req.body;
    pool.query('SELECT * FROM users WHERE email = $1', [email], (err, results) => {
      if (results.rowCount < 1) {
        return res.status(400).json({
          status: '400',
          error: 'Email does not exist',
        });
      }
      if (password === results.rows[0].password) {
        const token = jwt.sign({
          id: results.rows[0].id, email: results.rows[0].email, firstName: results.rows[0].firstName, phoneNumber: results.rows[0].phonenumber,
        }, APP_SECRET, {
            expiresIn: '24h', // expires in 24 hours
          });
        return res.status(201).json({
          status: '201',
          data: {
            token,
            firstName: results.rows[0].firstname,
            lastName: results.rows[0].lastname,
            email: results.rows[0].email,
            phone: results.rows[0].phonenumber,
          },
        });
      }
      return res.status(400).json({
        status: '400',
        message: 'Wrong password',
        password: results.rows[0][0].password,
      });
    });
  }

  static createUser(req, res) {
    const {
      firstName, lastName, email, password, phoneNumber, address,
    } = req.body;
    pool.query('INSERT INTO users \
      (firstName, lastName, email, password, phoneNumber, address) \
      VALUES ($1, $2, $3, $4, $5, $6)',
      [firstName, lastName, email, password, phoneNumber, address], (error, results) => {
        if (error) {
          return res.status(401).json({
            message: 'Error',
            error: error.detail,
          });
        }
        const token = jwt.sign({
          id: res.insertId, email, firstName, phoneNumber,
        }, APP_SECRET, {
            expiresIn: '24h', // expires in 24 hours
          });
        return res.status(201).json({
          status: '201',
          message: 'User created!',
          data: {
            token,
            id: results.insertId,
            firstName,
            lastName,
            email,
          },
        });
      });
  }
}
export default authController;
