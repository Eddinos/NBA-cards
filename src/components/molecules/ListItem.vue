<template>
  <div class="ListItem">
    <div class="fullName" :class="{ allStar: isAllStar}">
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
    },
    isAllStar: {
      type: Boolean,
      default: () => false
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
  &:hover {
    transform: scale(1.15);
    z-index: 1;
  }
}
.jersey {
  position: absolute;
  font-family: Impact;
  right: 30px;
  font-size: 7em;
  top: -28px;
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
  left: 10%;
  font-size: 1.9em;
  font-weight: bold;
  max-width: 85%;
  
}
.allStar {
  &::after {
    content: '\272A';
  }
}
</style>
