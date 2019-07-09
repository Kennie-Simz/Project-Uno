import Users from '../models/authModel';

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
    return res.status(200).json({
      status: 'success',
      data: {
        token: 'hgahghjad',
        id: newId,
        firstName,
        lastName,
        email,
      },
    });
  }
}
export default authController;
