import axios from 'axios';
import { API_ENDPOINT } from './../constaints/index';
import { Logtime, LogtimePutPage } from './../constaints/interface';
import authHeader from './auth-header';

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

  putLogtimeById(id:number, data: LogtimePutPage){
    return axios.put(`${API_ENDPOINT}api/Logtime/${id}`, data,{
      headers: authHeader()
    })
  }

  deleteLogtimeById(id:number){
    return axios.delete(`${API_ENDPOINT}api/Logtime/${id}`,{
      headers: authHeader()
    })
  }

  getLogtimeByTeam(team: string, fromDate: string, toDate: string){
    return axios.get(`${API_ENDPOINT}api/Logtime/byTeam`, {
      params:{
        Team:team,
        FromDate: fromDate,
        ToDate: toDate,
      },
      headers: authHeader()
    })
  }
}

export default new LogtimeService();