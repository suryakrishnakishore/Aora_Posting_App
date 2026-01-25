import axios from "axios";

// Use the machine's LAN IP so physical devices can reach the local backend.
// If your network uses a different IP, replace this value (or use an env/config).
// 
const API_URL = "http://10.60.196.97:5000/api-v1";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
 