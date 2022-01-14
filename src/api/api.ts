import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
    timeout: 16000,
})

api.interceptors.request.use((req) => {

    return req;
})


api.interceptors.response.use((res) => {
    return res;
})

export default api;