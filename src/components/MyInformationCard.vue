<script setup>

defineProps ({
  title: String,
  description: String,

})

</script>

<template>
  <div class="card">
    <div class="card__content"> 
            
           
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
      
  </div>

    
</template>

<style lang='scss' scoped>

    .card {
        width: rem(400);
        height: rem(400);
        border-radius: rem(20);
        border : rem(1) solid $gray;
        overflow: hidden;
        &__content{
            text-align: center;
            padding: rem(30) rem(30);
        > * + * {
            margin-top: rem(20);
        }
        h2 {
            font-weight:bold;
            font-size: $medium-font-size;
        }

        p {
            font-size: $small-font-size;
        }
        }
 
    }

</style>