import axios from 'axios'

export const apiService = axios.create({
  baseURL: process.env.REACT_APP_SERVICE_API_URL
});
