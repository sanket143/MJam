import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState } from 'vuex-electron'
import VuexPersistence from 'vuex-persist'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: [
    createPersistedState(),
    new VuexPersistence().plugin
  ],
  strict: process.env.NODE_ENV !== 'production'
})
