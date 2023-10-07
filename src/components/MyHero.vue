<script setup>
import BikeDelivery from '../components/elements/BikeDelivery.vue';
import MyTitle from '../components/elements/MyTitle.vue';
import MyButton from '../components/elements/MyButton.vue';
import MyIcon from '../components/elements/MyIcon.vue';

</script>

<template>

<div class="hero">
  <div class="hero__leftcontent">
<BikeDelivery/>
<MyTitle size="giant" el="h1" >The fastest<br>Delivery<br>In <span>Your City</span></MyTitle>
<MyTitle size="regular" el="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum. </MyTitle>

<div class="hero__btn">
<MyButton size="regular" variant="default" href='/'>Order Now</MyButton>
<MyIcon name="arrow bold" variant="white" stroke="orange" size="big"/>
<MyTitle size="regular" el="h4" weight="bold">Order Process</MyTitle>
</div>
</div>

<div class="hero__rightcontent">

</div>
</div>


</template>

<style lang="scss" scoped>


.hero {
  display: grid;
  grid-template-columns:  repeat(2, 1fr);
    

  .hero__btn {
    display: flex;
    align-items: center;
    gap: rem(30);
  }

  span {
    color:$primary-color;
   
  }
}

</style>