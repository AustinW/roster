import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    roster: null
  },

  getters: {
    roster(state) {
      return state.roster
    }
  },

  actions: {
    async loadRoster(context, payload) {
      const roster = await axios.get('/api/athletes?sort=&page=1&per_page=15')
      console.log(roster)
      context.commit('hydrateRoster', roster.data)
    },
  },

  mutations: {
    hydrateRoster(state, payload) {
      state.roster = payload
    }
  }
})

export default store