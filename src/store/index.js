import Vue from 'vue'
import Vuex from 'vuex'
import persistent from '../api/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: persistent.GetToken() || '',
    userinfo: persistent.GetUserinfo() || ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
