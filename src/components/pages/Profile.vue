<template>
  <div id="Profile">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div class="error" v-if="errorMsg">
      {{errorMsg}}
    </div>
    <div class="profile" v-if="!loading && !errorMsg">
      {{fullName}}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
      this.getProfile({fullName: this.fullName, language: navigator.language})
        .then(() => this.loading = false)
        .catch(err => {
          this.loading = false;
          //TODO proper error handling
          this.errorMsg = `Something went wrong when fetching ${this.fullName} profile`;
        })
    },
    ...mapActions({
      getProfile: 'getProfile'
    })
  },
  computed: {
    ...mapState({
      preferedLanguage: state => state.preferedLanguage
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

<style lang="css">
</style>
