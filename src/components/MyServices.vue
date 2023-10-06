<script setup>
import MyInformationsCards from '../components/MyInformationsCards.vue'
import MyTitle from '../components/elements/MyTitle.vue';
</script>


<template>
  <div class="section">
  <p class="section__title">Services</p>
  <MyTitle el="h3" size="big">Why Choose Our Favorite Food</MyTitle>
</div>
  <MyInformationsCards/>
    
</template>

<style lang="scss" scoped>

.section {
  text-align: center;
  margin: rem(120) 0 rem(40) 0 ;
  p {
    color:$primary-color;
  }

}


</style>