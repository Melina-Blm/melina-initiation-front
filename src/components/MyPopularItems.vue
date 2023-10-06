<script setup>
import MyCards from '../components/MyCards.vue'
import MyTitle from '../components/elements/MyTitle.vue';



</script>

<template>

<div class="section">
  <p class="section__title">Product</p>
  <MyTitle el="h3" size="big">Most Popular Items</MyTitle>
</div>
  <MyCards/>
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