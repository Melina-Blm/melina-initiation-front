<script setup>
import MyIcon from './elements/MyIcon.vue'
import MyTitle from './elements/MyTitle.vue'

defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  description: String,
  price: String,
})

</script>

<template>
        
    <div class="card">
        <div class="card__image">
            <img :src="imageSrc" :alt="imageAlt" >
        </div>
        <div class="card__content">
            <MyTitle el="h4" size="medium" weight="bold">{{ title }}</MyTitle>
            <MyTitle el="p" size="regular" >{{ description }}</MyTitle>
            <MyTitle el="p" size="regular" weight="bold"><span>$</span>{{ price }}</MyTitle>
        </div>
        <div class="card__icons">
            <MyIcon name="arrow right" variant="white" stroke="black"></MyIcon>
            <MyIcon name="arrow left" variant="black" stroke="white"></MyIcon>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.card{
 margin-top:110px;
  border-radius: 1.875rem;
  background: $white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.16);
  width: rem(258);
  height: rem(275);
  position: relative;

    &__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: rem(140);
    gap: 10px;
    position: relative;
    span {
        color: #EE140A;
    }
    }
    &__image img{
    position: absolute;
    width: rem(260);
    top: rem(30);
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
    }
    &__icons {
    position: absolute;
    display: flex;
    gap: 30px;
    bottom: rem(-50);
    left: 50%;
    transform: translate(-50%, -50%);    

    }


}
</style>