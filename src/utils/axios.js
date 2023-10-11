
import axios from 'axios';
// Client axios global
export const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })
  