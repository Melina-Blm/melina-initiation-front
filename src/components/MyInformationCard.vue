<script setup>
import { computed } from 'vue';
import IconCamion from './icons/IconCamion.vue';
import IconForkKnife from './icons/IconForkKnife.vue';
import IconForkSpoon from './icons/IconForkSpoon.vue';
import MyTitle from './elements/MyTitle.vue';
import IconClock from './icons/IconClock.vue';
import IconMap from './icons/IconMap.vue';
import IconPhone from './icons/IconPhone.vue';


const props = defineProps ({
  title: String,
  description: String,
  name: String,
  color: String,
  stroke: String,
  size: String,



})

const className = computed (() => ({

'-white': props.color === 'white',
'-black': props.color === 'black',
'-orange': props.color === 'orange',
'-lightorange': props.color === 'light orange',
'-nobg': props.color === 'nobg',


'-whitestroke': props.stroke === 'white',
'-blackstroke': props.stroke === 'black',
'-orangestroke': props.stroke === 'orange',
'-lightorangestroke': props.stroke === 'light orange',

'-small': props.size === 'small',
'-big': props.size === 'big',



}))

const getIcon = computed (() => {  
  switch (props.name) {
  case 'fork knife' :
    return IconForkKnife
  case 'camion' :
    return IconCamion
  case 'clock' :
    return IconClock
  case 'map' :
    return IconMap
  case 'phone' : 
    return IconPhone
  default: 
    return IconForkSpoon
            
  }

})
</script>

<template>
  <div class="card">
    <div class="card__content"> 
      <i class="icon" :class="className">
    <component :is='getIcon' class="icon__taille"/></i>
      <MyTitle size="medium" el="h1">{{ title }}</MyTitle>
      <MyTitle size="regular" el="p" >{{ description }}</MyTitle>
    </div>
      
  </div>

    
</template>

<style lang='scss' scoped>

    .card {
      
        width: rem(460);
        height: 100%;
        border-radius: rem(20);
        border : rem(1) solid $gray;
        overflow: hidden;
 
        &__content{
          
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
            text-align: center;
            padding: rem(110) rem(30);
        > * + * {
            margin-top: rem(25);
        }
        h2 {
            font-weight:bold;
            font-size: $medium-font-size;
        }
        }
 
    }

    
    .icon {
        align-items: center;
        display: inline-flex;
        border-radius : 100%;
        height: rem(50);
        justify-content: center; 
        width: rem(50);
        color: $white;
        
        &.-nobg{
            background-color: none;
            box-shadow: none;
        }
        &.-white {
        background-color: $white;
        }
        &.-black {
        background-color: $black;
        }
        &.-orange {
        background-color: $primary-color;
        }
        &.-lightorange {
        background-color: $secondary-color;
        }
        &.-lightorangestroke {
        color: $secondary-color;
        }
        &.-orangestroke {
        color: $primary-color;
        }
        &.-whitestroke {
        color: $white;
        }
        &.-blackstroke {
        color: $black;
        }
        &.-small{
        height: rem(30);
        width: rem(30);
            .icon__taille {
                width:rem(15);
            }
        }
        &.-big{
        height: rem(70);
        width: rem(70);
            .icon__taille {
                width:rem(35);
            }
        }
        .icon__taille {
                width:rem(25);
            }

        
    }

</style>