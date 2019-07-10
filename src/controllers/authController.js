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
    const token = jwt.sign({ id: newId }, APP_SECRET, {
      expiresIn: "24h" // expires in 24 hours
    });
    return res.status(200).json({
      message: 'success',
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
