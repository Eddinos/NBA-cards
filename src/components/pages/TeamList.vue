<template>
  <div class="TeamList">
    <ul class="TeamList__list">
      <li class="TeamList__ListItem" :class="{ eastern: team.conference === 'Eastern' }"
          is="ListItem"
          :item-name="team.fullName"
          item-number=""

          v-for="(team, index) in allTeams"
      ></li>
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/molecules/ListItem'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'TeamList',
  methods: {
    ...mapActions({
      getAllTeams: 'getAllTeams'
    })
  },
  computed: {
    ...mapState({
      allTeams: state => state.teams.all
    })
  },
  components: {
    ListItem
  },
  created () {
      this.getAllTeams();
  }
}
</script>

<style lang="scss" scoped="true">
@import '@/scss/vars.scss';
.TeamList {

  &__list {
    padding: 5%;
  }

  &__ListItem {
    border: 1px solid;
    color: #EEE;
    &.eastern {
      background-image: linear-gradient(-20deg, #b4c0d7, $eastern);
    }

    &:not(.eastern) {
      background-image: linear-gradient(-20deg, #eab0bb, $western);
    }
  }
}
</style>
