<template>
  <div id="Profile">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div class="error" v-if="errorMsg">
      {{errorMsg}}
    </div>
    <div class="noProfile" v-if="!profile">
      Couldn't find profile data for this player
    </div>
    <div class="profile" v-if="!loading && !errorMsg && profile">
      <div class="settings">
        <span @click="changeSets('en-US')">Imp</span>
        <span @click="changeSets('row')">Metric</span>
      </div>
      <div class="profile__fullName">
        {{fullName}}
      </div>
      <img class="profile__photo" :src="profile.img" :alt="fullName">
      <div class="profile__info">
        <span>Jersey number: {{profile.jersey}}</span><br>
        <span>position: {{profile.position}}</span><br>
        <span>height ({{units.heightUnit}}): {{profile.height}}</span><br>
        <span>weight ({{units.weightUnit}}): {{profile.weight}}</span><br>
        <span>team: {{profile.team.fullName}}</span><br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Profile',
  props: {
    fullName: {
      type: String
    }
  },
  data () {
    return {
      loading: false,
      errorMsg: ''
    }
  },
  methods: {
    waitForData () {
      this.loading = true;
      this.getProfile({fullName: this.fullName, language: this.preferedLanguage})
        .then(() => this.loading = false)
        .catch(err => {
          this.loading = false;
          //TODO proper error handling
          this.errorMsg = `Something went wrong when fetching ${this.fullName} profile`;
        })
    },
    changeSets (lang) {
      this.setLanguage(lang);
      this.getMeasures({fullName: this.fullName, language: this.preferedLanguage});
    },
    ...mapActions({
      getProfile: 'getProfile',
      getMeasures: 'getMeasures'
    }),
    ...mapMutations({
      setLanguage: 'setLanguage'
    })
  },
  computed: {
    units() {
      let heightUnit = this.preferedLanguage === 'en-US' ? 'ft' : 'm'
      let weightUnit = this.preferedLanguage === 'en-US' ? 'lb' : 'kg'
      return { heightUnit, weightUnit }
    },
    ...mapState({
      preferedLanguage: state => state.settings.preferedLanguage,
      profile: state => state.players.currentProfile
    })
  },
  created () {
    this.waitForData();
  },
  watch: {
    '$route': 'waitForData'
  },
}
</script>

<style lang="scss">
.profile {
  &__fullName {
    font-size: 2em;
    font-weight: bold;
  }
  &__photo{

  }
}
</style>
