<template>
  <div class="Home">
    Wesh alors comme jul
    <Card />
  </div>
</template>

<script>
import Card from '@/components/organisms/Card'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Card
  },
  created () {
    this.$store.dispatch('getAllPlayers')
    this.$store.dispatch('getAllTeams')
  }
}
</script>

<style lang="scss" scoped>
  .Home {

  }
</style>
