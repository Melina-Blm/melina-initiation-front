<script setup>
import MyInformationCard from './MyInformationCard.vue'
import { reactive } from 'vue'

const response =  [
  {
    description :'But I must explain to you how all this mistaken idea of denouncing pleasure and prasising pain was bron.',
    title : 'Qualityfull Food',
    name: 'fork knife',
    color: 'light orange',
    stroke:'orange',
    size:'big',
    border: 'with border',

  },
  {
    description :'But I must explain to you how all this mistaken idea of denouncing pleasure and prasising pain was bron.',
    title : 'Healthy Food',
    name: 'fork spoon',
    color: 'light orange',
    stroke:'orange',
    size:'big',
    border: 'with border',
  
  },
  {
    description :'But I must explain to you how all this mistaken idea of denouncing pleasure and prasising pain was bron.',
    title : 'Fast Delivery',
    name: 'camion',
    color: 'light orange',
    stroke:'orange',
    size:'big',
    border: 'with border',

  },
]

const cards = reactive(response)

</script>

<template>

  <div class="cards">
    <MyInformationCard v-for='card in cards' v-bind='card' :key="card.title" />
  </div>
</template>

<style lang="scss" scoped> 

.cards {
    gap: rem(25);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: stretch;
    

    @media screen and (max-width: $big){
  
    grid-template-columns:  repeat(2, 1fr);
    }
    @media screen and (max-width: $large){

    grid-template-columns:  repeat(1, 1fr);
    }
}
</style>