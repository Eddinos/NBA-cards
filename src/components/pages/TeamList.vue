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
    border: 1px solid #ccc;
    color: #101010;
    text-shadow: -1px 0 0 #eeeeee;
    &.eastern {
      background-image: linear-gradient(-20deg, #73eeff, #1EA9DC);
      background-position: 100% 84%;
    }
    background-image: linear-gradient(-20deg, #e63c3f, #ff817e);
    background-size: 84% 16%;
    background-repeat: no-repeat;
    background-position: 00% 84%;
  }
}
</style>
