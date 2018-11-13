<template>
  <div id="TeamProfile">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div class="error" v-if="errorMsg">
      {{errorMsg}}
    </div>
    <div class="noProfile" v-if="!profile">
      Couldn't find data for this team
    </div>
    <div class="TeamProfile" v-if="!loading && !errorMsg && profile">
      <h1 class="TeamProfile__fullName">
        {{ profile.fullName }}
      </h1>
      <!-- <img class="TeamProfile__photo" :src="profile.img" :alt="fullName"> -->
      <div class="TeamProfile__info">
        <span>tricode: {{tricode}}</span><br>
        <span>city: {{profile.city}}</span><br>
        <span>conference: {{profile.conference}}</span><br>
        <span>division {{profile.division}}</span><br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'TeamProfile',
  props: {
    tricode: {
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
      this.getProfile({tricode: this.tricode})
        .then(() => this.loading = false)
        .catch(err => {
          this.loading = false;
          console.log(err);
          //TODO proper error handling
          this.errorMsg = `Something went wrong when fetching ${this.tricode} profile`;
        })
    },
    ...mapActions({
      getProfile: 'getTeamProfile'
    })
  },
  computed: {
    ...mapState({
      profile: state => state.teams.currentTeamProfile
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
.TeamProfile {
  &__fullName {
    font-size: 2em;
    font-weight: bold;
  }
  &__photo{

  }
}
</style>
