import axios from 'axios'
import { apiService } from 'services/ApiServices'

const doLogin = (payload) => {
  return apiService.post('/api/login', payload);
}

export default {
  doLogin
}