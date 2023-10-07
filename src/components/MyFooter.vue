<script setup>
import MyIcon from '../components/elements/MyIcon.vue';
import MyTitle from '../components/elements/MyTitle.vue';

</script>


<template>

<div class="footer">
    <div class="footer__grid">
        <img src="../assets/logo.png" alt="">
        <MyTitle size="regular" el="p" color="grey" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.</MyTitle>
        <div class="footer__grid-icons">
        <MyIcon name="facebook" variant="light orange" stroke="orange" size="regular"/>
        <MyIcon name="twitter" variant="light orange" stroke="orange" size="regular"/>
        <MyIcon name="instagram" variant="light orange" stroke="orange" size="regular"/>
        <MyIcon name="linked in" variant="light orange" stroke="orange" size="regular"/>
        </div>
    </div>
    <div class="footer__grid">
        <MyTitle size="medium" class="footer__grid-title" el="h4">Opening Restaurant</MyTitle>
        <div class="footer__grid-links">
        <MyTitle size="regular" el="p" color="grey">Sat-Wet: 09:00am-10:00PM</MyTitle>
        <MyTitle size="regular" el="p" color="grey">Thursday: 09:00am-11:00PM</MyTitle>
        <MyTitle size="regular" el="p" color="grey">Friday: 09:00am-8:00PM</MyTitle>
        </div>
    </div>

    <div class="footer__grid">
        <MyTitle size="medium" class="footer__grid-title"  el="h4">User Link</MyTitle>
        <MyTitle size="regular" el="p" color="grey">About Us</MyTitle>
        <MyTitle size="regular" el="p" color="grey">Contact Us</MyTitle>
        <MyTitle size="regular" el="p" color="grey">Order Delivery</MyTitle>
        <MyTitle size="regular" el="p" color="grey">Payment & Tex</MyTitle>
        <MyTitle size="regular" el="p" color="grey">Terms of Services</MyTitle>
    </div>

    <div class="footer__grid">
        <MyTitle size="medium" el="h4" class="footer__grid-title" >Contact Us</MyTitle>
        <div class="footer__grid-test">
        <MyTitle size="regular" el="p" color="grey">1234 Country Club Ave</MyTitle>
        <MyTitle size="regular" el="p" color="grey">NC 123456, London, UK</MyTitle>
        <MyTitle size="regular" el="p" color="grey">+0123 456 7891</MyTitle>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

.footer {
    display: grid;
  grid-template-columns:  repeat(4, 1fr);
  place-items: start;
  gap: rem(70);
  background-color: #FAFAFF;
  padding: rem(50) rem(100);
  margin-top : rem(100);

  &__grid-title {
    margin-bottom: rem(50);
  }

  

  &__grid img {
    width: rem(150);
    margin-bottom: rem(30);
  }
  &__grid-icons {
   
    display:flex;
    justify-content: space-between;
    padding: rem(20) rem(0);
  }
}



</style>