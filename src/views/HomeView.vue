<script setup>
import MyHeader from '../components/MyHeader.vue';
import MyFooter from '../components/MyFooter.vue';
import MyHero from '../components/MyHero.vue'
import MyPopularItems from '../components/MyPopularItems.vue';
import MyServices from '../components/MyServices.vue';
import MyButton from '../components/elements/MyButton.vue';
import MyTestimonials from '../components/MyTestimonials.vue';
import MyNewsletter from '../components/MyNewsletter.vue';
import MyContactCards from '../components/MyContactCards.vue';

import { onMounted, ref, computed } from "vue";
import axios from 'axios';  

const getRecipesThen = () => {
  // 1er appel
  fetch(import.meta.env.VITE_API_URL + '/recipes')
    .then(response => response.json())
    .then((recipes) => {
      // Puis le 2ème lorsque le 1er est terminé
      fetch(import.meta.env.VITE_API_URL + '/recipes/cuisine/1')
        .then(response => response.json())
        .then(cuisineRecipies => console.log({ recipes, cuisineRecipies }))
    })
}

// Client axios global
const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const recipes = ref([])

const getRecipes = async () => {
  const response = await client.get('/recipes')
  return response.data
}


// Retourner un tableau des noms des recettes en utilisant recipes.map
// ["Spaghetti Bolognese", "Vegan Stir-Fry", "Updated Spaghetti name", "Riz cantonais", ...]
// Retourner un tableau des recettes dont le titre contient « Spaghetti » en utilisant recipes.filter
// ["Spaghetti Bolognese", "Updated Spaghetti name"]
// Retourner un boolean qui dit si une de vos recettes est du goal_id 1 en utilisant recipes.some
// true
const recipesNames = computed(() => {
  return recipes.value.map((item) => item.recipe_name)
})

const spaghettiRecipes = computed(() => {
  return recipes.value.filter((item) => item.recipe_name.includes('Spaghetti'))
})

const hasGoalId1Long = computed(() => {
  return recipes.value.some((item) => {
    if (item.goal_id === 1) {
      return true
    } else {
      return false
    }
  })
})

const hasGoalId1 = computed(() => {
  return recipes.value.some((item) => item.goal_id === 1)
})


onMounted(async () => {
  recipes.value = await getRecipes()
})

</script>

<template>
  <div class="content">
    <MyHeader/>
<!-- 
    <ul>
      <li v-for ="(recipe, index) in recipes" :key="index">
        {{ recipe.recipe_name }}

      </li>
    </ul> -->

<!-- 
recipesNames : {{ recipesNames }}<br><br>
spaghettiRecipes :{{ spaghettiRecipes }}<br><br>
hasGoalId1 {{ hasGoalId1 }}<br><br> -->

    <MyHero/>
    <MyContactCards/>

    <MyPopularItems/>
  
    <MyServices/> 
    <MyTestimonials/>
    <MyNewsletter/> 
  </div>
<MyFooter/>
</template>

<style lang="scss" scoped>


.content {
  margin: 0 rem(100);
}

</style>

