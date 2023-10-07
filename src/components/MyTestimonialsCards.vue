<script setup>
import MyTestimonialsCard from './MyTestimonialsCard.vue'
import { reactive } from 'vue'

const response =  [
  {
    description :'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”',
    title : 'Williams Jhone',
    imageSrc : 'src/assets/icon-personne.png',
    imageAlt : 'Icone ceo',
    subtitle: 'CEO & Co-Founder'
  },
]

const cards = reactive(response)

</script>

<template>

  <div class="cards">
    <MyTestimonialsCard v-for='card in cards' v-bind='card' :key="card.title" />
  </div>
</template>

<style lang="scss" scoped> 

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(20)
}
</style>