<template>
  <div class="Home">
    <Card />
    <input type="text" placeholder="search player"
    @input="handleSearch" v-model="searchInput">
    <ul>
      <li v-for="player in allPlayers">
        {{ player.fullName }}
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/organisms/Card'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      searchInput: ''
    }
  },
  methods: {
    handleSearch () {
      this.$store.dispatch('getAllPlayers', {fullName: this.searchInput})
    }
  },
  computed: {
    ...mapState({
      allPlayers: state => state.players.all
    })
  },
  components: {
    Card
  },
  created () {
    // this.$store.dispatch('getAllPlayers', {jersey: '23', fullName: 'bron'})
    this.$store.dispatch('getAllTeams')
  }
}
</script>

<style lang="scss" scoped>
  .Home {

  }
</style>
