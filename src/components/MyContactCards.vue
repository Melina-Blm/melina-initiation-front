<script setup>
import MyContactCard from './MyContactCard.vue'
import { reactive } from 'vue'

const response =  [
  {
    description :'Working time',
    title : 'Today 10:00am - 10:00pm',
    name: 'clock',
    color: 'orange',
    stroke:'white',
    size:'small',


  },
  {
    description :'Our Location',
    title : 'Washington, D.C., DC,USA',
    name: 'map',
    color: 'orange',
    stroke:'white',
    size:'small',

  
  },
  {
    description :'Phone Number',
    title : '+0123 456 7891',
    name: 'phone',
    color: 'orange',
    stroke:'white',
    size:'small',


  },
]

const cards = reactive(response)

</script>

<template>

  <div class="cards">
    <MyContactCard v-for='card in cards' v-bind='card' :key="card.title" />
  </div>
</template>

<style lang="scss" scoped> 

.cards {
   
    display: grid;
    grid-template-columns: repeat(3, 1fr);  
    margin: rem(130) rem(0) ;
    border-radius: rem(30);
   
    padding: rem(70) rem(70);
    box-shadow: 0 0 8px 0 rgba(1, 1, 1, 0.108);

    

    @media screen and (max-width: $big){
    grid-template-columns:  repeat(2, 1fr);
    }
    @media screen and (max-width: $large){

    grid-template-columns:  repeat(1, 1fr);
    }
    
}
</style>