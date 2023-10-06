<script setup>
import MyIcon from './elements/MyIcon.vue';
import MyTitle from './elements/MyTitle.vue';

</script>

<template>
<div class="header">
  <img src="../assets/logo.png" alt="">
  <nav class="header__nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">Shops</a></li>
    </ul>
  </nav>
  <div class="searchbar">
<MyIcon name="search" variant="nobg" stroke="black" size="regular"/>
<MyTitle size="regular" el="p" weight="bold" class="space">Search</MyTitle>
<div class="shoppingcart"> 
  <MyIcon name="cart" variant="nobg" stroke="black" size="regular"></MyIcon>
  <p class="shoppingcart_quantity">2</p>
</div>

  </div>
  </div>
        
    
</template>

<style lang="scss" scoped>
.shoppingcart{
  position: relative;

  .shoppingcart_quantity{
    font-size: $small-font-size;
    color:white;
    background-color: $primary-color;
    padding: rem(5) rem(9);
    box-shadow: 0 0 10px 0 $primary-color;
    border-radius: 100%;
    position: absolute;
    bottom: rem(25);
    left: rem(25);
  }
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 rem(20);
    padding: rem(20) 0;

nav {
    ul {
        display: flex;
        gap: rem(50);
    a {
        text-decoration: none;
        color: $black;
        font-size: $regular-font-size;
        font-weight: 600;
    }
    }
}
 
}

.searchbar {
  display: flex;
  align-items: center;
  background-color: $white;
  border-radius: rem(10);
  padding: rem(10);
  box-shadow: 0 2px 5px 0 $gray;
  .space{
    padding-right: rem(130);
    border-right: 1px solid $gray;
  }
}

</style>