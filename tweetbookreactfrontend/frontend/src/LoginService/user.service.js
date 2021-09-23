import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://18.218.227.249:8081/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getAll() {
    return axios.get(API_URL + 'ListAllUsers', { headers: authHeader() });
  }

  get(user_id) {
    return axios.get(API_URL + 'user/GetById/'+  user_id, { headers: authHeader() });
  }

  delete(user_id) {
    return axios.delete(API_URL + 'user/DeleteUser/' + user_id, { headers: authHeader() });
  }

  updateUser(user, user_id){
    return axios.put(API_URL + 'user/UpdateUser/' + user_id , user,{ headers: authHeader() });
}
}

export default new UserService();