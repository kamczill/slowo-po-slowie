import axios from 'axios';

// Create an Axios instance
const customAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Replace with your API base URL
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

// Request Interceptor to attach the token
customAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Optional: Response Interceptor for refreshing token
// customAxios.interceptors.response.use(response => {
//     return response;
// }, error => {
//     // Add logic to handle token refresh if response returns token expired
//     return Promise.reject(error);
// });

export default customAxios;