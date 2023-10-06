<script setup>
import MyHeader from '../components/MyHeader.vue';
import MyFooter from '../components/MyFooter.vue';
import MyHero from '../components/MyHero.vue'
import MyPopularItems from '../components/MyPopularItems.vue';
import MyServices from '../components/MyServices.vue';


</script>

<template>
  <div class="content">
    <MyHeader/>


    <MyHero/>

    <MyPopularItems/>
    <MyServices/>
  </div>
<MyFooter/>
</template>

<style lang="scss" scoped>


.content {
  margin: 0 rem(100);
}

</style>

