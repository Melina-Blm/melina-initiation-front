<script setup>
import MyTitle from '../components/elements/MyTitle.vue';
import MyTestimonialsCards from './MyTestimonialsCards.vue';

</script>

<template>

<div class="section">
  <p class="section__title">Testimonials</p>
  <MyTitle el="h3" size="big">Our Happy Client Says</MyTitle>
</div>

<div class="testimonials">

    <div class="testimonials__leftcontent">
      <MyTestimonialsCards/>
    </div>

    <div class="testimonials__rightcontent">
        <img src="../assets/testimonials-food.png" alt=""/>
    </div>
</div>
</template>


<style lang="scss" scoped>

.section {
  text-align: center;
  margin: rem(120) 0 rem(40) 0 ;
  p {
    color:$primary-color;
  }

}

.testimonials {
  display: grid;
  grid-template-columns:  repeat(2, 1fr);
  place-items: center;
  margin-bottom: rem(150);
  &__rightcontent img{
    max-width: rem(600);
  }
  }

</style>