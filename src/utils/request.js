import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})

service.interceptors.response.use(res => {
  const code = res.data.code
  const msg = res.data.msg
  if (code === 500) {
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
