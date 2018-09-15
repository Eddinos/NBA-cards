<template>
  <div class="TeamList">
    <input type="text" class="searchBar" placeholder="search team"
    v-model="searchInput">
    <ul class="TeamList__list">
      <li class="TeamList__ListItem" :class="{ eastern: team.conference === 'Eastern' }"
          is="ListItem"
          :item-name="team.fullName"
          item-number=""
          :key="index + team.fullName"

          v-for="(team, index) in filteredTeams"
      ></li>
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/molecules/ListItem'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'TeamList',
  data () {
    return {
      searchInput: ''
      }
  },
  methods: {
    ...mapActions({
      getAllTeams: 'getAllTeams'
    })
  },
  computed: {
    filteredTeams () {
      if (this.searchInput === '') return this.allTeams
      return this.allTeams.filter(team => team.fullName.toUpperCase().includes(this.searchInput.toUpperCase()))
    },
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
    background-image: linear-gradient(-20deg, #eab0bb, $western);
  }
}
</style>
