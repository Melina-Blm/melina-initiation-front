<script setup>


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
  </div>
        
    
</template>

<style lang="scss" scoped>

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



</style>