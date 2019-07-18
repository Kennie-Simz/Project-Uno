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
    const logUser = Users.find(item => item.email === email);
    if (logUser) {
      if (logUser.password === password) {
        const token = jwt.sign({ id: Users.id }, APP_SECRET, {
          expiresIn: '24h', // expires in 24 hours
        });
        res.json({
          status: '200',
          message: 'Logged in',
          data: {
            token,
            id: logUser.id,
            firstName: logUser.firstName,
            lastName: logUser.lastName,
            email: logUser.email,
          },
        });
      } else {
        res.status(400).json({
          status: '400',
          error: 'Password is incorrect',
        });
      }
    } else {
      res.status(400).json({
        status: '400',
        error: 'Email does not exist',
      });
    }
  }

  static createUser(req, res) {
    const {
      firstName, lastName, email, password, phoneNumber, address,
    } = req.body;
    pool.query('INSERT INTO users \
      (firstName, lastName, email, password, phoneNumber, address) \
      VALUES ($1, $2, $3, $4, $5, $6)',
    [firstName, lastName, email, password, phoneNumber, address], (error, results) => {
      if(error){
        return res.status(401).json({
          message: 'Error',
          error: error.detail
        })
      }
      const token = jwt.sign({
        id: res.insertId, email, firstName,
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
    })
  }
}
export default authController;
