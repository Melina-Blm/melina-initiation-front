<script setup>
import MyTitle from '../elements/MyTitle.vue';

</script>

<template>
<div class="btn">
    <MyTitle el="h4" size="regular" weight="bold">Bike Delivery</MyTitle>
    <div class="btn__image">
        <img src="../../assets/bikedelivery.png" alt="">
    </div>
</div>
        
    
</template>

<style lang="scss" scoped>

.btn {
    display: inline-flex;
    gap:rem(70);
    align-items: center;
    background-color: $secondary-color;
    padding: rem(5) rem(5) rem(5) rem(20);
    border-radius: rem(60);
    color:$primary-color;

    &__image {
        height: rem(43);
        background-color: #F6F6F6;
        border-radius: 100%;
        padding: 10px 0;
      img{
        width: rem(60);
        height: rem(43);
        border-radius: 100%;
 
      }
    }
}


</style>