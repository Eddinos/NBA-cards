<template>
  <div class="Home">
    <input type="text" class="searchBar" placeholder="search player"
    @input="handleSearch" v-model="searchInput" @keyup.enter="submit">
    <ul class="playerList">
      <router-link v-for="(player, index) in allPlayers"
      :to="{ name: 'Profile', params: {fullName: player.fullName} }"
      :key="player.fullName"
      class="profileLink">
        <li
          class="Home__ListItem"
          is="ListItem"
          :item-name="player.fullName"
          :item-number="player.jersey"
          :isAllStar="player.isAllStar"
         >
       </li>
     </router-link>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/organisms/Card'
import ListItem from '@/components/molecules/ListItem'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      searchInput: ''
      }
  },
  methods: {
    submit () {
      this.getAllPlayers({fullName: this.searchInput})
    },
    handleSearch () {
      if (this.searchInput === '') this.setPlayers([]);
      else this.getAllPlayers({fullName: this.searchInput})
    },
    ...mapActions({
      getAllPlayers: 'getAllPlayers'
    }),
    ...mapMutations({
      setPlayers: 'setPlayers'
    })
  },
  computed: {
    ...mapState({
      allPlayers: state => state.players.all
    })
  },
  components: {
    Card,
    ListItem
  }
}
</script>

<style lang="scss" scoped>
  .Home {
    .profileLink {
      text-decoration: none;
      color: inherit;
      &:nth-child(odd) {
        background-color: #F5F5F5;
      }
      &:nth-child(even) {
        background-color: #FAFAFA;
      }
    }
    &__ListItem {
      background-color: inherit;
    }
    .searchBar {
      font-size: 1.5em;
    }
    .playerList {
      padding-left: 5%;
      max-width: 90%;
    }
  }
</style>
