<script setup>
import MyButton from './elements/MyButton.vue';
import MyIcon from './elements/MyIcon.vue';

defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  description: String,
  buttonLabel: String
})

</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src='imageSrc' :alt="imageAlt" />
    </div>
    <div class="card__content"> 
      <div class="card__content-align">
        <h2>{{ title }}</h2>
        <p><MyIcon  name="star" variant="nobg" stroke="orange" size="small"/>{{ rating }}</p>
      </div>
      <p>{{ description }}</p>
      <div class="card__button">
        <MyButton variant="rounded" :has-icon="true" size="small">{{ buttonLabel }}</MyButton>
        <p>${{ price }}</p>
      </div>
      
        

    </div>
  </div>
    
</template>

<style lang='scss' scoped>

    .card {
        max-width: rem(500);
        border-radius: rem(20);
        border : rem(1) solid $gray;
        overflow: hidden;
        &__content{
            padding: rem(30) rem(30);
        > * + * {
            margin-top: rem(20);
        }
        h2 {
            font-weight:bold;
            font-size: $medium-font-size;
        }
        &-align { 
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        p {
            font-size: $small-font-size;
        }
        }
        &__button {
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: space-between;
        p {
            font-weight: 600;
            font-size: $regular-font-size,
        }
        }
    }
</style>