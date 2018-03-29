import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    roster: null,

    fieldOptions: {
      active: [
        { key: '0', value: 'No' },
        { key: '1', value: 'Yes' }
      ],
      gender: [
        { key: 'F', value: 'F' },
        { key: 'M', value: 'M' }
      ],
      level: [
        { key: '1', value: 'Level 1' },
        { key: '2', value: 'Level 2' },
        { key: '3', value: 'Level 3' },
        { key: '4', value: 'Level 4' },
        { key: '5', value: 'Level 5' },
        { key: '6', value: 'Level 6' },
        { key: '7', value: 'Level 7' },
        { key: '8', value: 'Level 8' },
        { key: '9', value: 'Level 9' },
        { key: '10', value: 'Level 10' },
        { key: 'ye-11-12', value: 'YE 11-12' },
        { key: 'ye-13-14', value: 'YE 13-14' },
        { key: 'jr', value: 'Junior Elite' },
        { key: 'sr', value: 'Senior Elite' }
      ]
    }
  },

  getters: {
    roster(state) {
      return state.roster
    },

    fieldOptions(state) {
      return state.fieldOptions
    }
  },

  actions: {
    async loadRoster(context) {
      const roster = await axios.get('/api/athletes?page=1&per_page=500')
      console.log(roster)
      context.commit('hydrateRoster', roster.data)
    },

    async save(context, payload) {
      const save = await axios.put('/api/athletes/' + payload.id, payload)
      context.commit('updateAthlete', payload)
      return save
    }
  },

  mutations: {
    hydrateRoster(state, payload) {
      state.roster = payload
    },

    updateAthlete(state, payload) {
      state.roster.data = state.roster.data.map((athlete) => {
        if (athlete.id === payload.id) {
          athlete[payload.field] = payload.value
        }

        return athlete
      })
    }
  }
})

export default store