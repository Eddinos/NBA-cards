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
      <table class="TeamProfile__info">
        <tr>
          <td class="TeamProfile__info__label">city:</td>
          <td><a :href="`https://www.google.com/maps/place/${profile.city}`" target="_blank">{{profile.city}}</a></td>
        </tr>
        <tr>
          <td class="TeamProfile__info__label">conference:</td>
          <td>{{profile.conference}}</td>
        </tr>
        <tr>
          <td class="TeamProfile__info__label">division:</td>
          <td>{{profile.division}}</td>
        </tr>
      </table>
      <img :src="profile.logo" width="100%">
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

  &__info {
    font-size: 2em;

    a {
      color: black;
    }

    &__label {
      text-align: right;
    }
  }

  &__city {

    a {
      color: black;
    }
  }
}
</style>
