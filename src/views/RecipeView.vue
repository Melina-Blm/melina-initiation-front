<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import {client} from '@/utils/axios.js';


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


<div class="p-recipe-view">
  recette avec l'id : {{ route.params.id }}

  <router-link to="/">Retour à l'accueil</router-link>
  {{ recipe.recipe_name }}
  <p>Liste des ingrédients</p>

  <ul>
    <li v-for ='ingredient in recipe.ingredients'> 
    {{ ingredient.quantity }} {{ ingredient.unit }} of {{ ingredient.name }}</li>
  </ul>


  

</div>
</template>

<style lang="scss" scoped>
</style>