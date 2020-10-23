import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constaints';

//http://logtime.mitechcenter.vn/
const url = 'api/Auth/login'

export const postAuth = (data) => {
    return axiosService.postAuth(`${API_ENDPOINT}/${url}`, data)
}