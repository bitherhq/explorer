import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.bither.io/v1/'
});

export const setToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Token ${token}`;
};

export const clearToken = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export default axiosInstance;
