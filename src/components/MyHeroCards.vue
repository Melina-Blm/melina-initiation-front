<script setup>
import MyHeroCard from './MyHeroCard.vue'
import { reactive } from 'vue'

const response =  [
  {
    description :'Mushroom Sauce',
    title : 'Burger',
    imageSrc : 'src/assets/burger_sandwich.png',
    imageAlt : 'Image de burger',
    price:'5.15',
  },
  {
    description :'Mushroom Sauce',
    title : 'Food Combo',
    imageSrc : 'src/assets/food_combo.png',
    imageAlt : 'Image de menu',
    price:'9.15',
  },
  {
    description :'Mushroom Sauce',
    title : 'Pizza',
    imageSrc : 'src/assets/pizza-png.png',
    imageAlt : 'Image de pizza',
    price:'6.15',
  },
  {
    description :'Mushroom Sauce',
    title : 'Cake',
    imageSrc : 'src/assets/cake.png',
    imageAlt : 'Image de cake',
    price:'5.15',
  },
]

const cards = reactive(response)

</script>

<template>

  <div class="cards">
    <MyHeroCard v-for='card in cards' v-bind='card' :key="card.title" />
  </div>
</template>

<style lang="scss" scoped> 

.cards{
  display: grid;
  grid-template-columns: repeat(2, 280px);
  justify-items: end;

 

  
}
</style>