import { parseTeam } from './../utils/parseTeam';
export const API_ENDPOINT = 'http://logtime.mitechcenter.vn/';

export const ACTION_OPTIONS = [
  { value: '1', label:"Lập trình"},
  { value: '2', label:"Phân tích"},
  { value: '3', label:"Kiểm thử"},
  { value: '4', label:"Thiết kế"},
  { value: '5', label:"Nghiên cứu"},
  { value: '6', label:"Thảo luận"},
  { value: '7', label:"Lên kế hoạch"},
  { value: '7', label:"Gặp khách hàng"},
  { value: '8', label:"Khác"},
]

export const getSelectOptions = (item:string, label?:string) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]') ;
  const getTeam = users.map((user:any) => !user[`${item}`] ? '1' : user[`${item}`]);
  const uniqueTeam = new Set(getTeam);
  
  const listUser = (Array.from(uniqueTeam)).sort();
  return parseTeam(listUser, label)
}

