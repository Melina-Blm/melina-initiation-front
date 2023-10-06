<script setup>
import MyCard from './MyCard.vue'
import { reactive } from 'vue'

const response =  [
  {
    description :'',
    title : 'Pizza',
    imageSrc : 'src/assets/pizza-pepperoni.jpg',
    imageAlt : 'Image de pizza',
    buttonLabel : 'Add To Cart',
    price:'18.50',
    rating:'5.0',
  },
  {
    description :'',
    title : 'Enchilade',
    imageSrc : 'src/assets/enchiladas.jpg',
    imageAlt : 'Image de enchiladas',
    buttonLabel : 'Add To Cart',
    price:'25.50',
    rating:'5.0',
  },
  {
    description :'',
    title : 'Green Beans',
    imageSrc : 'src/assets/greenbeans.jpg',
    imageAlt : 'Image de green beans',
    buttonLabel : 'Add To Cart',
    price:'12.00',
    rating:'4.9',
  },
  {
    description :'',
    title : 'Gyro Sandwich',
    imageSrc : 'src/assets/sandwich.jpg',
    imageAlt : 'Image de sandwich',
    buttonLabel : 'Add To Cart',
    price:'15.00',
    rating:'4.9',
  },
  {
    description :'',
    title : 'Chicken Pot Pie',
    imageSrc : 'src/assets/chicken-pot-pie.png',
    imageAlt : 'Image de chicken pot pie',
    buttonLabel : 'Add To Cart',
    price:'25.00',
    rating:'4.9',
  },
  {
    description :'',
    title : 'Green Salad',
    imageSrc : 'src/assets/green-salad.jpg',
    imageAlt : 'Image de green salad',
    buttonLabel : 'Add To Cart',
    price:'15.00',
    rating:'4.9',
  },
]

const cards = reactive(response)

</script>

<template>

  <div class="cards">
    <MyCard v-for='card in cards' v-bind='card' :key="card.title" />
  </div>
</template>

<style lang="scss" scoped> 

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(20)
}
</style>