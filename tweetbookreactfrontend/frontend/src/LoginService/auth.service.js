import axios from "axios";

const API_URL = "http://18.218.227.249:8081/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, first_name, last_name, email, phone_no, password) {
    return axios.post(API_URL + "signup", {
      first_name,
      last_name,
      username,
      email,
      password,
      phone_no,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();