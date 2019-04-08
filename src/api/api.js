import axios from 'axios';


let host = 'http://127.0.0.1:8000';

//登录
export const login = params => {
  debugger
  return axios.post(`${host}/login/`, params)
}
//获取菜单信息
export const getCategory = params => {
  return axios.get(`${host}/menu/`, params);

};
