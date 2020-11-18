import axios from 'axios';
import authHeader from './auth-header';
import { API_ENDPOINT } from '../constaints';

class UserService {
  getPublicUser() {
    return axios.get(`${API_ENDPOINT}api/Users`, {
      headers: authHeader(),
    });
  }

  getUserId(id: number) {
    return axios.get(`${API_ENDPOINT}api/Users/${id}`, {
      headers: authHeader(),
    });
  }

  updateUser(id:number, data:any) {
    return axios.put(`${API_ENDPOINT}api/Users/${id}`, JSON.stringify(data),{
      headers: authHeader(),
    })
  }

  deleteUser(id:number){
    return axios.delete(`${API_ENDPOINT}api/Users/${id}`, {
      headers: authHeader()
    })
  }

  getAllUsers(){
    return axios.get(`${API_ENDPOINT}api/Users`, {
      headers: authHeader()
    })
  }
}



export default new UserService();
