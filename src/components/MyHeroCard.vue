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
</style>