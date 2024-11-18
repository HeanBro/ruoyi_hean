import request from '@/utils/request'
export function getCodeImg () {
  return request({
    url: '/captchaImage',
    method: 'get',
    timeout: 20000
  })
}

export function login (username, password, code, uuid) {
  const data = {
    username: username,
    password: password,
    code: code,
    uuid: uuid
  }
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}
