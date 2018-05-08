<template>
  <div class="ListItem">
    <div class="fullName">
      {{fullName}}
    </div>
    <div class="jersey">
      {{jersey}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    itemNumber: {
      type: String,
      default: () => 'no #'
    },
    itemName: {
      type: String,
      default: () => 'playa'
    }
  },
  data() {
    return {
      fullName: this.itemName,
      jersey: this.itemNumber,
    }
  }
}
</script>

<style lang="scss" scoped>
.ListItem {
  height: 5em;
  overflow: hidden;
  position: relative;
  &:nth-child(odd) {
    background-color: #CCC;
  }
  &:nth-child(even) {
    background-color: #EEE;
  }
}
.jersey {
  position: absolute;
  right: 30px;
  font-size: 8em;
  top: -39px;
  color: white;
  text-shadow: 1px 0px 5px black;
  font-weight: bold;
}
.fullName {
  z-index: 1000;
  position: relative;
  text-align: left;
  top: 50%;
  transform: translateY(-50%);
  left: 15%;
  font-size: 2em;
  font-weight: bold;
}
</style>
