<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import {client} from '@/utils/axios.js';
import RecipeCard from "../components/RecipeCard.vue";
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";
import MyTitle from "../components/elements/MyTitle.vue";
import MyButton from "../components/elements/MyButton.vue";
import MyIcon from "../components/elements/MyIcon.vue"


const recipe = ref({})
const route = useRoute()
console.log(route);

const getRecipe = async () => {
  const response = await client.get (`/recipes/${route.params.id}`)
  return response.data
}

onMounted (async () => {
  //Requête pour récupérer la recette avec l'id correspondant
  recipe.value = await getRecipe ()
})

</script>

<template>
<div class="content">
<MyHeader/>

<div class="p-recipe-view">
  <div class="section">
  <p class="section__title">Recette </p>
  <MyTitle el="h3" size="big">{{ recipe.recipe_name }}</MyTitle>
</div>
  
  <!-- recette avec l'id : {{ route.params.id }} -->

  <MyButton class="btn-home" variant="rounded" size="small" :has-icon="true"><router-link to="/">Retour à l'accueil</router-link></MyButton>


  <div class="grid">
    <div class="grid__left">
      <img :src=recipe.image_url alt="">
    </div>
    <div class="grid__right">
      <MyIcon name="fork knife" variant="orange" stroke="white" size="regular"></MyIcon>
    <MyTitle el="h4" weight="bold" size="medium">- Listes des ingrédients de la recette :</MyTitle>
        <ul>
          <li v-for ='ingredient in recipe.ingredients'> 
          {{ ingredient.quantity }} {{ ingredient.unit }} of {{ ingredient.name }}</li>
        </ul>

    </div>
    
  </div>


  
  </div>
</div>
<MyFooter/>
</template>

<style lang="scss" scoped>

.grid {
  margin:rem(70) rem(0);
  display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;
    place-content: center;

    @media screen and (max-width: $big){
  
    grid-template-columns:  repeat(1, 1fr);
    }
    @media screen and (max-width: $large){
  
    grid-template-columns:  repeat(1, 1fr);
    }

    &__right {
      background-color: $white;
      border : 1px solid $gray;
      padding:rem(50);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:rem(30)
     

    }

    &__left {

      img{
        width:rem(500);
        border-radius: rem(40) ;
        border : 1px solid $gray;
      
      }

    }

}
.content {
  margin: 0 rem(100);
}

.section {
  text-align: center;
  margin: rem(40) 0 rem(20) 0 ;
  p {
    color:$primary-color;
  }

}


.btn-home {
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  a {
    text-decoration: none;
    color:$white;
  }
  
}
</style>