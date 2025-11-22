import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.baseapi,

//   headers: {'Content-type':'application/json'}
});