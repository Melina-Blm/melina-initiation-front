<script setup>
import MyCard from './MyCard.vue'
import { reactive } from 'vue'

const response =  [
    {
    description :'Description de la card',
    title : 'Card 1',
    imageSrc : 'http://placekitten.com/300/150',
    imageAlt : 'Image de chat',
    buttonLabel : 'Bouton de la card',
    },
    {
    description :'Description de la fdgfcard',
    title : 'Card 2',
    imageSrc : 'http://placekitten.com/300/150',
    imageAlt : 'Image de chat',
    buttonLabel : 'Bouton de la card',
    },
    {
    description :'Description de la fdgfcard',
    title : 'Card 3',
    imageSrc : 'http://placekitten.com/300/150',
    imageAlt : 'Image de chat',
    buttonLabel : 'Bouton de la card',
    }
]

const cards = reactive(response)

</script>

<template>

<div class="cards">
<MyCard v-for='card in cards' v-bind='card'/>
</div>
</template>

<style lang="scss" scoped> 

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(20)
}
</style>