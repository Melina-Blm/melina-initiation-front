<script setup>
import {computed} from "vue"
import MyIcon from "./MyIcon.vue";
const props = defineProps({
  content: String,
  href: String,
  size: String,
  variant: String,
  hasIcon: Boolean,
})

const className = computed (() => ({

  ' -rounded': props.variant === 'rounded',
  ' -small': props.size === 'small',
  ' -hasIcon': props.hasIcon,

}))
</script>

<template>
  
  <a v-if="href" :href="href" :class="className"  class="button">
    <slot></slot>
        
    <MyIcon :class="className" class="button__hasIcon" v-if="hasIcon" name="arrow right" variant="white" stroke="orange" size="regular" />
  </a>
  <button :content="content" v-else class="button" :class="className" >
    <slot></slot>
    <MyIcon v-if="hasIcon" :class="className" class="button__hasIcon"  name="arrow right" variant="white" stroke="orange" size="regular" />
  </button>
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

    &.-hasIcon{
       > * {
       margin-left: rem(15);
      }
    }
    &.-rounded {
      background: $primary-color;
      padding: rem(13) rem(20);
      font-weight: 500;
      border-radius: rem(67);
    }
    &.-small {
      font-size: $small-font-size;
      padding: rem(14) rem(29);
      font-weight: 400;

    
    }

  }
</style>