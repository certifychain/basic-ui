import axios from 'axios'

const apiurl = 'http://localhost:8000'

export const login = (username, password) => {
    const data = {
      username: username,
      password: password
    }
  
    return axios.post(`${apiurl}/login/`, data);
}

export const signup = (username, password, email) => {
    const data = {
      username: username,
      password: password,
      email: email
    }
  
    return axios.post(`${apiurl}/signup/`, data);
  }

