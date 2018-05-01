import teamAPI from '@/api/teamAPI'

const state = {
  all: []
}

const actions = {
  getAllTeams ({ commit }) {
    teamAPI.getNames()
      .then(teams => commit('setTeams', teams))
  }
}

const mutations = {
  setTeams (state, teams) {
    state.all = teams
  }
}

export default {
  state,
  actions,
  mutations
}
