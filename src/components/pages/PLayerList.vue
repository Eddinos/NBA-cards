<template>
  <div class="PLayerList">
    <input type="text" class="searchBar" placeholder="search player"
    @input="handleSearch" v-model="searchInput" @keyup.enter="submit">
    <ul class="list">
      <router-link v-for="(player, index) in allPlayers"
      :to="{ name: 'Profile', params: {fullName: player.fullName} }"
      :key="player.fullName + player.jersey"
      class="profileLink">
        <li
          class="PLayerList__ListItem"
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
import ListItem from '@/components/molecules/ListItem'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'PLayerList',
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
    ListItem
  }
}
</script>

<style lang="scss">
@import "@/scss/vars.scss";
.PLayerList {
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
  .list {
    padding-left: 5%;
    max-width: 90%;
  }
}
</style>
