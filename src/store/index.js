import Vue from 'vue'
import Vuex from 'vuex'

import players from './modules/players'
import teams from './modules/teams'
import settings from './modules/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    players,
    teams,
    settings
  }
})
