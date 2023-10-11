<script setup>
import MyTitle from './elements/MyTitle.vue';
import MyButton from './elements/MyButton.vue';

defineProps({
id: Number,
title: String,
description: String,
image: String
})
</script>

<template>
  <div class="c-recipe-card">
      <img class="c-recipe-card__image" :src="image" alt="">
    <div class="c-recipe-card__content">
    
      <MyTitle el="h3" size="regular" class="c-recipe-card__title">{{ title }}</MyTitle>
      <MyTitle el="p" size="regular"  class="c-recipe-card__description">{{ description }}</MyTitle>
      <MyButton class="btn-more" variant="rounded" size="small" :has-icon="false"><router-link :to="'/recipes/' + id">Plus d'infos</router-link></MyButton>
    </div>
  </div>
</template>

<style lang="scss">
.c-recipe-card {
  background-color: $white;
  box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width:400px;

  border-radius: rem(20);
 
  box-shadow: 0 0 5px 0 rgba(1, 1, 1, 0.108);
  .btn-more a{
  text-decoration: none;
  color:$white;
  }
  &__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    
    gap:rem(10)
  }

  &__image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 10px;

  }

  &__title {
    font-size: 22px;
    line-height: 1.2;
    color: black;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  &__description {
    font-size: 16px;
    color: black;
    line-height: 1.2;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>