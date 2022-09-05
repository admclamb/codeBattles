import { API } from './API';
import { User } from '../ts/interfaces/User';
import { Login } from '../ts/interfaces/Login';
import { axiosError } from './axiosError';
export class UserApi {
  static async signup(user: User) {
    return await API.post('/users', { data: user }).catch(axiosError);
  }

  static async login(login: Login) {
    return await API.post('/users/login', { data: login });
  }
  static async logout(logout: any) {
    return await API.post('/users/logout', { data: logout });
  }

  static async deleteUser(user: any) {
    return await API.delete('/users');
  }

  static async loginToken(refreshToken: string) {
    return await API.post('/users/login/token');
  }
}
