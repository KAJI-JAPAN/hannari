// frontend/src/api.ts
import axios from 'axios'

export const api = axios.create({
    baseURL: '/api', // vite.config.tsでproxy設定することでRailsに転送される
    withCredentials: true
})