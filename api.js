import axios from "axios";

const API_URL = "http://10.60.196.97:5000/api-v1";

const api = axios.create({
    baseURL: API_URL
});

export default api;

