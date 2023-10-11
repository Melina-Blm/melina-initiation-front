<script setup>
import MyButton from './elements/MyButton.vue';
import MyIcon from './elements/MyIcon.vue';
import MyTitle from './elements/MyTitle.vue';


defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  description: String,
  buttonLabel: String,
  price: String,
  rating: String,

})

</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src='imageSrc' :alt="imageAlt" />
    </div>
    <div class="card__content"> 
      <div class="card__content-align">
        <MyTitle size="medium" el="h2">{{ title }}</MyTitle>
        <MyTitle size="small" el="p"><MyIcon  name="star" variant="nobg" stroke="orange" size="small"/>{{ rating }}</MyTitle>
      </div>
      <p>{{ description }}</p>
      <div class="card__button">
        <MyButton variant="rounded" :has-icon="false" size="small">{{ buttonLabel }}</MyButton>
        <MyTitle size="regular" el="p" weight="bold">${{ price }}</MyTitle>
      </div>
      
        

    </div>
  </div>
    
</template>

<style lang='scss' scoped>

    .card {
        max-width: rem(485);
        border-radius: rem(20);
        border : rem(1) solid $gray;
        box-shadow: 0 0 5px 0 rgba(1, 1, 1, 0.108);
        overflow: hidden;
        margin-bottom: rem(30);
        &__content{
            padding: rem(30) rem(30);
        > * + * {
           margin-top: rem(20);
        }
 
        &-align { 
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
   
        }
        &__button {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>