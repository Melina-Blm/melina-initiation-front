<script setup>
import MyCards from '../components/MyCards.vue'
import MyInformationsCards from '../components/MyInformationsCards.vue'
import MyHeader from '../components/MyHeader.vue';

import MyTitle from '../components/elements/MyTitle.vue';
import MyHero from '../components/MyHero.vue'


</script>

<template>
<header class="header">
<MyHeader/>
</header>

<MyHero/>
<div class="section">
  <p class="section__title">Product</p>
  <MyTitle el="h3" size="big">Most Popular Items</MyTitle>
</div>
  <MyCards/>

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

