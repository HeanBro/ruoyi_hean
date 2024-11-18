import { login } from '@/api/login'
import { setToken, getToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    Login ({ commit }, userInfo) {
      const username = userInfo.username
      const password = userInfo.password
      const code = userInfo.code
      const uuid = userInfo.uuid
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid).then(res => {
          console.log('gsdres', res)
          setToken(res.token)
          commit('SET_TOKEN', res.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default user
