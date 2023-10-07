<script setup>

import MyTitle from './elements/MyTitle.vue';
import MyIcon from './elements/MyIcon.vue';


defineProps ({
  title: String,
  description: String,
  subtitle: String,
  imageAlt: String,
  imageSrc: String,


})


</script>

<template>
  <div class="card">

    <MyIcon class="card__icon1" name="arrow left" variant="orange" stroke="white" size="regular"/>
    <MyIcon class="card__icon2" name="arrow right2" variant="orange" stroke="white" size="regular"/>

    <div class="card__content">
      <img :src='imageSrc' :alt="imageAlt" />
      <div class="card__title">
      <MyTitle size="regular" el="h5">{{ title }}</MyTitle>
      <MyTitle size="small" el="p" weight="light">{{ subtitle }}</MyTitle>
    </div>
    </div>

    <div class="card__description">
      <MyTitle size="regular" el="p" >{{ description }}</MyTitle>
   </div>
    
      
  </div>

    
</template>

<style lang='scss' scoped>

    .card {
        position: relative;
        width: rem(600);
        height: rem(250);
        border-radius: rem(20);
        border : rem(1) solid $gray;
        overflow: hidden;
        padding:rem(50);
       
        display: flex;
        flex-direction: column;
        justify-content: center;
   
        
        &__icon1 {
            position: absolute;
            bottom:rem(150);
            left:rem(-30);
         
        }
        &__icon2 {
            position: absolute;
            bottom:rem(150);
            right:rem(-30);
      
        }

        &__title {
        display: flex;
        flex-direction: column;
    }

    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap:rem(20);
    }
    &__description {
        text-align: center;
        margin-top:rem(50);
    }
 
    }
  

 

</style>