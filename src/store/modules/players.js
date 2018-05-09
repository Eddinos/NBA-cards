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
  },
  getMeasures({ commit }, variables) {
    return playerAPI.getMeasures(variables)
      .then(profiles => profiles[0])
      .then(profile => commit('updateCurrentProfile', profile))
  }
}

const mutations = {
  setPlayers (state, players) {
    state.all = players
  },
  setCurrentProfile (state, profile) {
    state.currentProfile = profile
  },
  updateCurrentProfile (state, profile) {
    state.currentProfile = Object.assign(state.currentProfile, profile)
  }
}

export default {
  state,
  actions,
  mutations
}
