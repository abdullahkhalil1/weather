import axios from 'axios'

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  timeout: 600000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
  },
})

export const http = {
  get: (url) => instance.get(url).then((response) => response.data),
}
