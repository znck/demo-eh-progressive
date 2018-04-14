import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const state = () => ({
  start: Date.now(),
  end: Date.now(),
  interval: null
})

const mutations = {
  start(state, interval) {
    state.start = state.end = Date.now()
    state.interval = interval
  },
  setTimer(state, time) {
    state.end = time
  }
}

const actions = {
  start({ state, commit }) {
    if (state.interval === null) {
      commit('start', setInterval(() => {
        commit('setTimer', Date.now())
      }, 1000))
    }
  }
}

const getters = {
  elapsed: state => (state.end - state.start) / 1000 | 0
}

export default new Store({
  state,
  mutations,
  actions,
  getters
})

