import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

if(localStorage.getItem("auth") !== null){
    let token = localStorage.getItem("auth");
    axiosInstance.defaults.headers.common = {
        'Authorization': `Bearer ${token}`
    };
}

export default axiosInstance;
