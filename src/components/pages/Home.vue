<template>
  <div class="Home">
    <Card />
    <input type="text" placeholder="search player"
    @input="handleSearch" v-model="searchInput">
    <ul>
      <li
      is="ListItem"
       v-for="(player, index) in allPlayers"
       :key="player.fullName"
       :item-name="player.fullName"
       :item-number="player.jersey"
       >
       </li>
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
    this.$store.dispatch('getAllPlayers')
  }
}
</script>

<style lang="scss" scoped>
  .Home {

  }
</style>
