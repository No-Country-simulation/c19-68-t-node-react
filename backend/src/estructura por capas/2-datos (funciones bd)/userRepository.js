import { User } from '../1-modelo (schemas)/user.js';

class UserRepository {
  constructor() {
    this.users = [
      new User(1, 'John Doe', 'john@example.com'),
      new User(2, 'Jane Doe', 'jane@example.com')
    ];
  }

  getAll() {
    return this.users;
  }

  getById(id) {
    return this.users.find(user => user.id === id);
  }
}

export const userRepository = new UserRepository();