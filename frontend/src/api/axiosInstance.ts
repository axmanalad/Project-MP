import axios from 'axios';
import { getToken } from './authService';

const instance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL as string || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  }
});

instance.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;