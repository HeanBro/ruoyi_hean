import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from '@/store/getters'
import permissions from './modules/permissions'
import app from '@/store/modules/app'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    permissions,
    user,
    app
  }
})
