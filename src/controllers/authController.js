import jwt from 'jsonwebtoken';
import Users from '../models/authModel';

import { APP_SECRET } from '../config';

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
    const newId = parseInt(Users.length, 10) + 1;
    const {
      email, firstName, lastName, password, phoneNumber, address,
    } = req.body;
    const newUser = {
      id: newId,
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
      address,
      is_admin: false,
    };
    Users.push(newUser);
    const token = jwt.sign({
      email, firstName,
    }, APP_SECRET, {
      expiresIn: '24h', // expires in 24 hours
    });
    return res.status(201).json({
      status: '201',
      message: 'User created!',
      data: {
        token,
        id: newId,
        firstName,
        lastName,
        email,
      },
    });
  }
}
export default authController;
