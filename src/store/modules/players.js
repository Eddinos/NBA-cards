import playerAPI from '../../api/playerAPI';

const state = {
  all: []
}

const actions = {
  getAllPlayers({ commit }, variables) {
    playerAPI.getNames(variables)
      .then(players => commit('setPlayers', players))
  }
}

const mutations = {
  setPlayers (state, players) {
    state.all = players
  }
}

export default {
  state,
  actions,
  mutations
}
