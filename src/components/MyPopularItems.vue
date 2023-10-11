<script setup>
import MyCards from '../components/MyCards.vue'
import MyTitle from '../components/elements/MyTitle.vue';
import MyButton from './elements/MyButton.vue';
import MyIcon from './elements/MyIcon.vue';



</script>

<template>

<div class="section">
  <p class="section__title">Product</p>
  <MyTitle el="h3" size="big">Most Popular Items</MyTitle>
</div>
  <MyCards/>
  <MyButton class="btn-more" variant="rounded" :has-icon="true" size="regular">See more products</MyButton>
</template>

<style lang="scss" scoped>

.section {
  text-align: center;
  margin: rem(120) 0 rem(40) 0 ;
  p {
    color:$primary-color;
  }

}

.btn-more {
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
}

</style>