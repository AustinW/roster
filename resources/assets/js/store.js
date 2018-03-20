import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    roster: null
  },

  getters: {

  },

  actions: {
    loadRoster(context, payload) {
      context.commit('hydrateRoster', payload)
    }
  },

  mutations: {
    hydrateRoster(state, rowData) {
      state.roster = rowData
    }
  }
})

export default store