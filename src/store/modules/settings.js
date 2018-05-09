const state = (localStorage.settings && JSON.parse(localStorage.settings)) || {
  preferedLanguage: navigator.language
}

const saveSettings = () => localStorage.setItem('settings', JSON.stringify(state));

const mutations = {
  setLanguage (state, lang) {
    state.preferedLanguage = lang;
    saveSettings();
  }
}

export default {
  state,
  mutations
}
