import axios from 'axios'

const HOST = process.env.HOST

const api = axios.create({
  baseURL: 'http://3.80.243.157:3000',
})

export default api
