import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.bither.io/v1/',
  headers: {'X-Auth-Token': 'mytoken'}
});

export const setToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Token ${token}`;
};

export const clearToken = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export default axiosInstance;
