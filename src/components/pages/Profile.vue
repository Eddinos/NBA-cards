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
        <div class="can-toggle">
          <input id="a" type="checkbox" v-model="chosenUnits">
          <label for="a">
            <div class="can-toggle__switch" data-checked="Imp" data-unchecked="Metric"></div>
          </label>
        </div>
      </div>
      <div class="profile__fullName">
        {{fullName}}
      </div>
      <img class="profile__photo" :src="profile.img" :alt="fullName">
      <table class="profile__info">
        <tr>
          <td class="profile__info__label">#</td>
          <td class="profile__info__value">{{profile.jersey}}</td>
        </tr>
        <tr>
          <td class="profile__info__label">Position:</td>
          <td class="profile__info__value">{{profile.position}}</td>
        </tr>
        <tr>
          <td class="profile__info__label">Height ({{units.heightUnit}}):</td>
          <td class="profile__info__value">{{profile.height}}</td>
        </tr>
        <tr>
          <td class="profile__info__label">Weight ({{units.weightUnit}}):</td>
          <td class="profile__info__value">{{profile.weight}}</td>
        </tr>
        <tr>
          <td class="profile__info__label">Team:</td>
          <td class="profile__info__value">
            <router-link :to="{ name: 'TeamProfile', params: {tricode: profile.team.tricode} }">
              {{profile.team.fullName}}
            </router-link>
          </td>
        </tr>
      </table>
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
      errorMsg: '',
      unitsValue: false
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
    chosenUnits: {
      get () {
        return this.preferedLanguage === 'en-US';
      },
      set (value) {
        this.unitsValue = value;
        let languageCode = value ? 'en-US' : 'eu';
        this.changeSets(languageCode);
      }
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
@import '@/scss/vars.scss';

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
    margin: auto;

    &__label {
      text-align: right;
    }

    &__value {
      text-align: left;

      a {
        color: black;
      }
    }
  }

  .settings {

  }
}

@mixin can-toggle-branding(
  $can-toggle-off-color: $eastern,
  $can-toggle-on-color: $western,
  $can-toggle-inactive-text: rgba(white, 0.5),
  $can-toggle-transition: cubic-bezier(0,1,0.5,1)
) {

  input[type="checkbox"] {

    &[disabled] ~ label {
      color: rgba($can-toggle-off-color, 0.5);
    }

    &:focus ~ label, &:hover ~ label {
      .can-toggle__switch {
        background-color: $can-toggle-off-color;
        &:after { color: darken($can-toggle-off-color, 10%); }
      }
    }
    &:hover ~label { color: darken($can-toggle-off-color, 5%); }
    &:checked {
      ~ label {
        &:hover { color: darken($can-toggle-on-color, 3%); }

        .can-toggle__switch {
          background-color: lighten($can-toggle-on-color, 5%);
          &:after { color: darken($can-toggle-on-color, 5%); }
        }
      }

      &:focus, &:hover {
        ~ label {
          .can-toggle__switch {
            background-color: $can-toggle-on-color;
            &:after { color: darken($can-toggle-on-color, 10%); }
          }
        }
      }
    }
  }

  label {

    .can-toggle__label-text { flex: 1; }

    .can-toggle__switch {
      transition: background-color 0.3s $can-toggle-transition;
      background: lighten($can-toggle-off-color, 5%);
      &:before { color: $can-toggle-inactive-text; }
      &:after {
        // Autoprefixer choked here, so making the prefixes explicit
        -webkit-transition: -webkit-transform 0.3s $can-toggle-transition;
        transition: transform 0.3s $can-toggle-transition;
        color: $can-toggle-off-color;
      }
    }

  }
}

@mixin can-toggle-appearance
(
  $can-toggle-width: 134px,
  $can-toggle-height: 36px,
  $can-toggle-border-radius: 4px,
  $can-toggle-offset: 2px,
  $can-toggle-label-font-size: 14px,
  $can-toggle-switch-font-size: 12px,
  $can-toggle-shadow: 0 3px 3px rgba(black, 0.4)
){
  $can-toggle-switch-width: $can-toggle-width/2;

  input[type="checkbox"] {

    &:focus ~ label, &:hover ~ label {
      .can-toggle__switch {
        &:after { box-shadow: $can-toggle-shadow; }
      }
    }

    &:checked {
      ~ label {
        .can-toggle__switch {
          &:after { transform: translate3d($can-toggle-width - ($can-toggle-switch-width + $can-toggle-offset),0,0); }
        }
      }
      &:focus, &:hover {
        ~ label {
          .can-toggle__switch { &:after { box-shadow: $can-toggle-shadow; } }
        }
      }
    }
  }

  label {
    font-size: $can-toggle-label-font-size;

    .can-toggle__switch {
      height: $can-toggle-height;
      flex: 0 0 $can-toggle-width;
      border-radius: $can-toggle-border-radius;

      &:before {
        left: $can-toggle-width/2;
        font-size: $can-toggle-switch-font-size;
        line-height: $can-toggle-height;
        width: $can-toggle-width/2;
        padding: 0 12px;
      }

      &:after {
        top: $can-toggle-offset; left: $can-toggle-offset;
        border-radius: $can-toggle-border-radius/2;
        width: $can-toggle-switch-width - $can-toggle-offset;
        line-height: $can-toggle-height - ($can-toggle-offset*2);
        font-size: $can-toggle-switch-font-size;
      }

      &:hover {
        &:after { box-shadow: $can-toggle-shadow; }
      }
    }
  }
}



.can-toggle {
  position: relative;
  *, *:before, *:after { box-sizing: border-box; }
  //overflow: hidden;

  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    top: 0; left: 0;

    &[disabled] ~ label {
      pointer-events: none;
      .can-toggle__switch { opacity: 0.4; }
    }

    &:checked {
      ~ label {

        .can-toggle__switch {

          &:before {
            content: attr(data-unchecked);
            left: 0;
          }

          &:after {
            content: attr(data-checked);
          }
        }
      }

      &:focus, &:hover {
        ~ label {
        }
      }
    }
  }

  label {
    user-select: none;
    position: relative;
    display: flex;
    align-items: center;

    .can-toggle__label-text {
      flex: 1;
      padding-left: 32px;
    }

    .can-toggle__switch {
      position: relative;

      &:before {
        content: attr(data-checked);
        position: absolute;
        top: 0;
        text-transform: uppercase;
        text-align: center;
      }

      &:after {
        content: attr(data-unchecked);
        position: absolute;
        z-index: 5;
        text-transform: uppercase;
        text-align: center;
        background: white;
        transform: translate3d(0,0,0);
      }

    }

  }

  // Default values for .can-toggle class
  @include can-toggle-branding;
  @include can-toggle-appearance;
}
</style>
