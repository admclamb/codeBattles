import { API } from './Axios';
import { User } from '../ts/interfaces/User';
import { Login } from '../ts/interfaces/Login';
export class UserApi {
  static async signup(user: User) {
    return await API.post('/users', user);
  }

  static async login(login: Login) {
    return await API.post('/users/login', login);
  }
  static async logout(logout: any) {
    return await API.post('/users/logout', logout);
  }

  static async deleteUser(user: any) {
    return await API.delete('/users');
  }
}
