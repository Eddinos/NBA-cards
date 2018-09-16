<template lang="html">
  <div class="Header">
    <router-link :to="{ name: 'Home', params: {} }" class="Header__home">
    </router-link>
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
    background: linear-gradient(25deg, #696969, #252525);
    display: flex;

    &__home {
      height: 100%;
      width: 50px;
      text-decoration: none;
      color: black;

      &::after {
        content: '\2302';
        font-size: 40px;
      }
    }
  }
</style>
