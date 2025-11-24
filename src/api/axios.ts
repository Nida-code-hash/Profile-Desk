import axios, { type AxiosInstance,type AxiosResponse,type InternalAxiosRequestConfig } from 'axios';
import { baseUrl } from '../utils/Constants';

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        // Check if the request is for a FormData payload
        if (config.data instanceof FormData && config.headers) {
            config.headers['Content-Type'] = 'multipart/form-data';
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Any additional processing for successful responses
        return response;
    },
    (error) => {
        // Handle errors, e.g., logging out the user on 401 errors
        if (error.response && error.response.status === 401) {
            // Optionally redirect to login
            console.log('Unauthorized! Logging out...');
            localStorage.clear();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance; 