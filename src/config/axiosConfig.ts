import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
});
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
