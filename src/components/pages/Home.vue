<template>
  <div class="Home">

    <router-link :to="{ name: 'PLayerList', params: {} }">
      <Panel class="Home__panel" title="Players" side="right"/>
    </router-link>

    <Panel class="Home__panel" title="Teams" side="left"/>

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
    &__panel {
      width: 96%;
      margin: 3px auto;
    }

    a {
      text-decoration: none;
    }
  }
</style>
