import uuid from 'uuid';

class User {
  constructor() {
    this.users = [];
  }

  // Create new user
  create({ username, email, password }) {
    const newUser = {
      username,
      email,
      password,
      id: uuid.v4(),
    };
    this.users.push(newUser);
    return newUser;
  }

  // Find user by id
  findById(id) {
    return this.users.find(user => user.id === id);
  }

  remove() {
    this.users = [];
  }
}

export default new User();
