<script>
export default {
  props: {
    content: String,
    href: String,
    size: String, 
    variant: String,
  },
  data() {
    return {
      className : `button ${this.variant === "rounded" ? " -rounded" : ""} ${this.size === "small" ? "-small" : ""}`
    }
  }
}
</script>

<template>
<a v-if="href" :href="href" :class="className"><slot></slot></a>
<button v-else :class="className"><slot></slot></button>

</template>

<style lang="scss" scoped>


  .button {
    background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);    
    padding: rem(33) rem(67);
    border : none;
    font-family: $primary-font-family;
    border-radius: rem(15);
    color: white;
    display: inline-block;
    text-decoration: none;
    font-weight: 600;
    box-shadow : 0px rem(4) rem(4) rgba(0,0,0,0.25);
    font-size: $regular-font-size;
    &.-rounded {
      background: $primary-color;
      padding: rem(26) rem(64);
      font-weight: 500;
      border-radius: rem(37);
    }
    &.-small {
      font-size: $small-font-size;
      padding: rem(14) rem(29);
      font-weight: 400;
    }
  }
</style>