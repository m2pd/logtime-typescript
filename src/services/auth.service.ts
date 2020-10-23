import { parseToken } from './../utils/parseToken';
import axios from 'axios';
import { API_ENDPOINT } from '../constaints';

const url = 'api/Auth/login';

export interface UserType {
  username: string;
  password: string;
  ipLocal: string;
}

class AuthService {
  login(data: UserType) {
    return axios.post(`${API_ENDPOINT}${url}`, data).then((response) => {
      if (response.data.token) {
        console.log(response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data));
        var infoUser = parseToken(response.data.token)
        console.log(infoUser)
      }
      return response.data;
    })
    
  }

  logout(): void {
    // localStorage.removeItem('user');
    localStorage.clear();
  }
}

export default new AuthService();
