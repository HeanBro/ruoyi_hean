import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})

service.interceptors.request.use(config => {
  const notToken = (config.headers || {}).notToken === true
  if (getToken() && !notToken) {
    config.headers.Authorization = 'Bearer ' + getToken()
  }
  return config
})

service.interceptors.response.use(res => {
  const code = res.data.code
  const msg = res.data.msg
  if (code === 401) {
    return Promise.reject(new Error('无效的对话，或者对话已过期，请重新登录。'))
  } else if (code === 500) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else if (code !== 200) {
    return Promise.reject(new Error('err'))
  } else {
    return res.data
  }
})

export default service
