<template lang="html">
  <div class="Header">
    <router-link :to="{ name: 'Home', params: {} }" class="Header__home">
    </router-link>
    <span class="Header__title">{{ $route.meta.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
  .Header {
    width: 100%;
    height: 50px;
    background: linear-gradient(180deg, #696969, #252525);
    display: flex;
    position: relative;

    &__home {
      height: 100%;
      width: 50px;
      text-decoration: none;
      color: white;

      &::after {
        content: '\2302';
        font-size: 40px;
      }
    }

    &__title {
      font-family: 'impact';
      color: white;
      font-size: 3em;
      font-variant: all-petite-caps;
      transform: translateX(-50%);
      position: absolute;
      left: 50%;
      line-height: 1;
    }
  }
</style>
