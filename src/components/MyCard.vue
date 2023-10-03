<script setup>
import MyButton from './elements/MyButton.vue';

const props = defineProps ({
    imageSrc: String,
    imageAlt : String,
    title : String,
    description : String,
    buttonLabel : String,

})

</script>

<template>
    <div class="card">
        <div class="card__image">
            <img :src='imageSrc' :alt="imageAlt" />
        </div>
        <div class="card__content"> 
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <div class="card__button">
            <MyButton variant="rounded" :has-icon="true" size="small">{{ buttonLabel }}</MyButton>
            </div>
        

        </div>
    </div>
    
</template>

<style lang='scss' scoped>

    .card {
        max-width: rem(300);
        border-radius: rem(20);
        border : rem(1) solid $gray;
        overflow: hidden;
        &__content{
            padding: rem(20) rem(10);
        > * + * {
            margin-top: rem(20);
        }
        }
        &__button {
            text-align: center;
        }
    }
</style>