<template>
  <div class="Panel" :class="sideClass('Panel')">
    <div class="Panel__title" :class="sideClass('Panel__title')">
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: {
    title: {
      type: String,
      default: () => ''
    },
    side: {
      type: String,
      default: () => 'right'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    sideClass (className) { return `${className}--${this.side}`}
  }
}
</script>

<style lang="scss">
.Panel {
  height: 12em;
  border-color: lightgrey;
  border-width: 1px;
  border-style: outset;
  position: relative;
  background: linear-gradient(to right, #d81e35, #93291e 82%);
  color: white;
  &::before {
    background-image: url('../../assets/basketball_lines.png');
    background-position: -35px 0;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: block;
    content: "";
    position: absolute;
    filter: opacity(0.3) grayscale(1);
  }
  &:hover {
    border-style: inset;
  }

  &__title {
    font-family: impact;
    font-size: 4em;
    padding: 1em 0 0 1em;

    &--left {
      padding: 1em 1.5em 0 0;
    }
  }
  &--left {
    background: linear-gradient(to left, #1488cc, #2b32b2);

    &::before {
      background-position: 130px 0;
      background-size: 260px;
      background-image: url('../../assets/champions.png');
    }
  }
}
</style>
