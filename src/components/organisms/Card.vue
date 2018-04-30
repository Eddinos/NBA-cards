<template lang="html">
  <div class="Card">
    Cado
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Card',
  computed: {
    ...mapState(['players'])
  }
}
</script>

<style lang="scss">
</style>
