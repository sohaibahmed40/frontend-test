// Axios configuration interceptors

import axios from 'axios';

axios.interceptors.request.use((config) => {
  const authToken = localStorage.getItem('token');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});
