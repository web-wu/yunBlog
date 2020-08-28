import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1'
axios.interceptors.request.use(config => {
  config.headers.Authorization = `${localStorage.getItem('token')}`
  return config
})
axios.interceptors.response.use(config => {
  return config
})

export default axios
