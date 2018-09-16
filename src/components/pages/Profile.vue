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
        <div class="units">
          <span @click="changeSets('en-US')" :class="{active: this.preferedLanguage === 'en-US'}">Imp</span>
          <span @click="changeSets('row')" :class="{active: this.preferedLanguage !== 'en-US'}">Metric</span>
        </div>
      </div>
      <div class="profile__fullName">
        {{fullName}}
      </div>
      <img class="profile__photo" :src="profile.img" :alt="fullName">
      <div class="profile__info">
        <span># {{profile.jersey}}</span><br>
        <span>Position: {{profile.position}}</span><br>
        <span>Height ({{units.heightUnit}}): {{profile.height}}</span><br>
        <span>Weight ({{units.weightUnit}}): {{profile.weight}}</span><br>
<router-link :to="{ name: 'TeamProfile', params: {tricode: profile.team.tricode} }">
        <span>Team: {{profile.team.fullName}}</span>
        </router-link><br>
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
  margin: 4%;
  border-style: outset;
  background-color: #f8f8f8;

  &__fullName {
    font-size: 2em;
    font-weight: bold;
  }
  &__photo {
    border-bottom: 1px #676767 solid;
  }

  &__info {
    font-size: 1.2em;
  }

  .settings {
    .units {
      width: 139px;

      span {
        background: #aaa;
        position: relative;
        display: inline-block;
        position: relative;
        font-size: 1.2em;
      }

      span.active {
        background-color: #202020;
        color: #eee;
      }

      span:first-child {
        z-index: 1;
        padding-right: 16px;
        padding-left: 4px;
        &::after {
          content: '';
          position: absolute;
          transform: skewX(-25deg);
          height: 24px;
          width: 16px;
          display: block;
          top: 0;
          right: 0;
          background-color: inherit;
          transform-origin: 0 100%;
          z-index: 0;
        }
      }

      span:not(:first-child) {
        display: inline-block;
        position: relative;
        z-index: 0;
        font-size: 1.2em;
        padding-left: 14px;
        padding-right: 2px;

        &::after {
          content: '';
          position: absolute;
          transform: skewX(-25deg);
          height: 24px;
          width: 12px;
          display: block;
          top: 0;
          left: -4px;
          background-color: inherit;
          transform-origin: 0 100%;
          z-index: 0;
        }
      }
    }
  }
}
</style>
