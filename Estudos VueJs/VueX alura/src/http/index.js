import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (erro) => Promise.reject(erro))
export default http