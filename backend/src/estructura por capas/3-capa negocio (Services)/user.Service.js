import { userRepository } from '../2-datos (funciones bd)/userRepository.js';

class UserService {
  getAllUsers() {
    return userRepository.getAll();
  }

  getUserById(id) {
    return userRepository.getById(id);
  }
}

export const userService = new UserService();