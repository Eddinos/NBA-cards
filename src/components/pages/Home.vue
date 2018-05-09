<template>
  <div class="Home">
    <Card />
    <input type="text" placeholder="search player"
    @input="handleSearch" v-model="searchInput">
    <ul>
      <router-link v-for="(player, index) in allPlayers"
      :to="{ name: 'Profile', params: {fullName: player.fullName} }"
      :key="player.fullName"
      class="profileLink">
        <li
        class="Home__ListItem"
        is="ListItem"
         :item-name="player.fullName"
         :item-number="player.jersey"
         >
       </li>
     </router-link>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/organisms/Card'
import ListItem from '@/components/molecules/ListItem'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      searchInput: ''
      }
  },
  methods: {
    handleSearch () {
      this.getAllPlayers({fullName: this.searchInput})
    },
    ...mapActions({
      getAllPlayers: 'getAllPlayers'
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
  },
  created () {
    // this.$store.dispatch('getAllPlayers', {jersey: '23', fullName: 'bron'})
    this.getAllPlayers();
  }
}
</script>

<style lang="scss" scoped>
  .Home {
    .profileLink {
      text-decoration: none;
      color: inherit;
      &:nth-child(odd) {
        background-color: #CCC;
      }
      &:nth-child(even) {
        background-color: #EEE;
      }
    }
    &__ListItem {
      background-color: inherit;
    }
  }
</style>
