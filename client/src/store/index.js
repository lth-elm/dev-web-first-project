import { createStore } from 'vuex'
import api from '@/api/api'

export default createStore({
  state: {
    token: undefined
  },
  mutations: {
    setUser (state, token) {
      state.token = token
    },
    resetUser (state) {
      state.token = undefined
    }
  },
  actions: {
    login ({ commit }, credentials) {
      api.login(credentials)
        .then(data => {
          const { success, token, message } = data
          if (!success) {
            console.error(message)
            return
          }
          localStorage.setItem('token', token)
          commit('setUser', token)
        })
    }
    // ,
    // checkToken (actionObject) {
    //   const token = localStorage.getItem('token')
    //   fetch(url, {
    //     headers: {
    //       Authorization: 'Bearer ' + token
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       actionObject.commit('setUser', data.user)
    //     })
    // },
    // logout (actionObject) {
    //   actionObject.commit('resetUser')
    //   localStorage.removeItem('token')
    // }
  },
  modules: {
  }
})
