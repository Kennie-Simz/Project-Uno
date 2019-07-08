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
    const { email, first_name, last_name, password, phoneNumber, address} = req.body;
    const newUser = {
      id: newId,
      email,
      first_name,
      last_name,
      password,
      phoneNumber,
      address,
      is_admin: false
    };
    Users.push(newUser);
    return res.status(200).json({
      status: 'success',
      data: {
        token: "hgahghjad",
        id: newId,
        first_name,
        last_name,
        email
      }
    });
  }
}
export default authController;
