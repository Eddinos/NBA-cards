import teamAPI from '../../api/teamAPI'

const state = {
  all: [],
  currentTeamProfile: {}
}

const actions = {
  getAllTeams ({ commit }) {
    teamAPI.getNames()
      .then(teams => commit('setTeams', teams))
  },
  getTeamProfile({commit}, variables) {
    return teamAPI.getProfile(variables)
      .then(profiles => profiles[0])
      .then(profile => commit('setCurrentTeamProfile', profile))
  }
}

const mutations = {
  setTeams (state, teams) {
    state.all = teams
  },
  setCurrentTeamProfile (state, profile) {
    state.currentTeamProfile = profile
  }
}

export default {
  state,
  actions,
  mutations
}
