<template>
  <div class="Home">

    <div class="Home__title">
      NBA Stats
    </div>

    <router-link :to="{ name: 'PLayerList', params: {} }">
      <Panel class="Home__panel" title="Players" side="right"/>
    </router-link>
    <router-link :to="{ name: 'TeamList', params: {} }">
      <Panel class="Home__panel" title="Teams" side="left"/>
    </router-link>

  </div>
</template>

<script>
import Card from '@/components/organisms/Card'
import Panel from '@/components/molecules/Panel'
export default {
  name: 'Home',
  components: {
    Card,
    Panel
  }
}
</script>

<style lang="scss" scoped>
  .Home {

    &__title {
      font-family: 'impact';
      font-size: 3em;
    }

    &__panel {
      width: 96%;
      margin: 3px auto;
    }

    a {
      text-decoration: none;
    }
  }
</style>
