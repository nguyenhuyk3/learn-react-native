import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'https://apibds.newstarco.com.vn/api';
const TIMEOUT = 10000;

const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        if (error.response) {
            console.log('Mã code:', error.response.status);
            console.log('Máy chủ phản hồi:', error.response.data);
        } else if (error.request) {
            console.log('Lỗi mạng, hãy xem xét lại máy chủ');
        } else {
            console.log('Lỗi không xác định:', error.message);
        }
        
        return Promise.reject(error);
    }
);

export default apiClient;