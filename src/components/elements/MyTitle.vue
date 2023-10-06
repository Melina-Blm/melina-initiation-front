<script setup>

import { computed } from 'vue';

const props = defineProps(({
  el: HTMLElement,
  size: String,
  weight: String,
  color:String,

})) 

const className = computed (()=>({
  ' -big': props.size === 'big',
  ' -small': props.size === 'small',
  ' -giant': props.size === 'giant',
  ' -bigger': props.size === 'bigger',
  ' -medium': props.size === 'medium',
  ' -regular': props.size === 'regular',

  ' -h1': props.el === 'h1',
  ' -h2': props.el === 'h2',
  ' -h3': props.el === 'h3',
  ' -h4': props.el === 'h4',
  ' -p': props.el === 'p',

  '-bold' : props.weight == 'bold',
  '-light' : props.weight == 'light',


  '-orange' : props.color == 'orange',
  '-grey' : props.color == 'grey',
}))

</script>

<template>

<div>
    <h2 v-if="props.el === 'h2'"  class="title" :class="className"><slot></slot></h2>
    <h1 v-else-if="props.el === 'h1'"  class="title" :class="className"><slot></slot></h1>
    <h3 v-else-if="props.el === 'h3'"  class="title" :class="className"><slot></slot></h3>
    <p v-else-if="props.el === 'p'" class="title" :class="className"><slot></slot></p>
    <h4 v-else-if="props.el === 'h4'"  class="title" :class="className"><slot></slot></h4>
  
</div>
    
</template>

<style lang="scss" scoped>
.title{
font-size: $regular-font-size;
margin:0;

  &.-small{
    font-size: $small-font-size;
  }
  &.-giant{
    font-size: $giant-font-size;
  }
  &.-regular{
    font-size: $regular-font-size;
  }
  &.-medium{
    font-size: $medium-font-size;
  }
  &.-big {
    font-size: $big-font-size;
  }
  &.-bigger {
    font-size: $bigger-font-size;
  }
  &.-light {
    font-weight:400;
  }
 
  &.-bold {
    font-weight:bold;
  }
  &.-orange {
    color:orange;
  }
  &.-grey {
    color:$gray;
  }
}


</style>