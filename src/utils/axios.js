import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'http://192.161.167.147:10009/',});

export const setToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Token ${token}`;
};

export const clearToken = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export default axiosInstance;
