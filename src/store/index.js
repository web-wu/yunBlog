import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../assets/axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    login_sign (state, username) {
      state.username = username
    }
  },
  actions: {
    async login_sign_async (context, params) {
      const { data } = await axios.post('/admin/login', params)
      if (data.status === 0) return false
      localStorage.setItem('token', data.token)
      context.commit('login_sign', data.username)
      return data
    },
    async validate_login (context) {
      const { data } = await axios.get('/admin/validate_login')
      if (data.status === 0) {
        return {
          status: 0
        }
      }
      context.commit('login_sign', data.username)
      localStorage.setItem('token', data.token)
      return {
        status: 1,
        role: data.role
      }
    }
  }
})
