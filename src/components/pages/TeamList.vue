<template>
  <div class="TeamList">
    <input type="text" class="searchBar" placeholder="search team"
    v-model="searchInput">
    <ul class="TeamList__list">
      <router-link v-for="(team, index) in filteredTeams"
      :to="{ name: 'TeamProfile', params: {tricode: team.tricode} }" :key="index + team.fullName">
      <li class="TeamList__ListItem" :class="{ eastern: team.conference === 'Eastern' }"
          is="ListItem"
          :item-name="team.fullName"
          item-number=""
      ></li>
    </router-link>
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
      return this.allTeams
      .filter(team => team.fullName.toUpperCase().includes(this.searchInput.toUpperCase()))
    },
    ...mapState({
      allTeams: state => state.teams.all.sort((t1, t2) => t1.fullName.localeCompare(t2.fullName))
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

  a {
    text-decoration: none;
  }

  &__list {
    padding: 5%;
  }

  &__ListItem {
    border: 1px solid;
    color: #EEE;
    text-shadow: -1px 0 0 #101010;
    &.eastern {
      background-image: linear-gradient(-20deg, #2780a9, $eastern);
    }
    background-image: linear-gradient(-20deg, #ea5959, $western);
  }
}
</style>
