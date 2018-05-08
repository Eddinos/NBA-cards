import playerAPI from '../../api/playerAPI';

const state = {
  all: [],
  currentProfile: {}
}

const actions = {
  getAllPlayers({ commit }, variables) {
    return playerAPI.getNames(variables)
      .then(players => commit('setPlayers', players))
  },
  getProfile({ commit }, variables) {
    return playerAPI.getProfile(variables)
      .then(profiles => profiles[0])
      .then(profile => commit('setCurrentProfile', profile))
  }
}

const mutations = {
  setPlayers (state, players) {
    state.all = players
  },
  setCurrentProfile (state, profile) {
    state.currentProfile = profile
  }
}

export default {
  state,
  actions,
  mutations
}
