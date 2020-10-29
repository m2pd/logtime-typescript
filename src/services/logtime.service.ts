import { API_ENDPOINT } from './../constaints/index';
import axios from 'axios'
import authHeader from './auth-header'

class LogtimeService {
  getLogtime(id:number,FromDate:string,ToDate:string){
    return axios.get(`${API_ENDPOINT}api/Logtime?UserId=${id}&FromDate=${FromDate}&ToDate=${ToDate}`,{
      headers: authHeader()
    })
  }
}

export default new LogtimeService();