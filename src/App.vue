<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
