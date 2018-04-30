import playerAPI from '../../api/playerAPI';

const state = {
  all: []
}

const actions = {
  getAllPlayers({ commit }) {
    playerAPI.getNames()
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
