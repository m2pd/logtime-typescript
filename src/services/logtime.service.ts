import { Logtime } from './../constaints/interface';
import { API_ENDPOINT } from './../constaints/index';
import axios from 'axios'
import authHeader from './auth-header'

class LogtimeService {
  getLogtime(id:number,FromDate:string,ToDate:string){
    return axios.get(`${API_ENDPOINT}api/Logtime?UserId=${id}&FromDate=${FromDate}&ToDate=${ToDate}`,{
      headers: authHeader()
    })
  }

  postLogtime(dataLogtime:Logtime){
    return axios.post(`${API_ENDPOINT}api/Logtime`, dataLogtime,{
      headers: authHeader() 
    })
  }

  getLogtimeById(id:number){
    return axios.get(`${API_ENDPOINT}api/Logtime/${id}`,{
      headers: authHeader()
    })
  }

  deleteLogtimeById(id:number){
    return axios.delete(`${API_ENDPOINT}api/Logtime/${id}`,{
      headers: authHeader()
    })
  }
}

export default new LogtimeService();