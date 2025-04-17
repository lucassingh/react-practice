import axios from 'axios';

const nasaApi = axios.create({
    baseURL: import.meta.env.VITE_URL,
    params: {
        api_key: import.meta.env.VITE_API_KEY,
    },
    timeout: 10000,
});

export default nasaApi;