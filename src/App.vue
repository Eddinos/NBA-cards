<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/organisms/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Century Gothic', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: scroll;
  height: 100vh;
  background: linear-gradient(60deg,#e8e7ef,#dbdae9);
  /* background-color: #3A3A3A; */
}
@font-face {
    font-family: 'Impact';
    src: local('Impact'),
        url('/static/fonts/impact.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
}
</style>
