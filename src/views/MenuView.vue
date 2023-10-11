<script setup>
import RecipeCard from '../components/RecipeCard.vue';
import { onMounted, ref, computed } from "vue";
import {client} from '@/utils/axios.js';
import MyHeader from '../components/MyHeader.vue';
import MyTitle from '../components/elements/MyTitle.vue';
import MyButton from '../components/elements/MyButton.vue'
import MyFooter from '../components/MyFooter.vue'

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


const addRecipe = () => {
  recipes.value.push({ recipe_name: 'Pesto spaghetti' })
}

const recipesInHero = 4
// Utiliser 2 computed pour gérer les listes de recette
// Une computed pour afficher les 4 premières du tableau recipes avec recipes.value.slice
// Une computed pour afficher toutes les autres avec recipes.value.slice

const heroRecipes = computed(() => {
  // indexes de 0 à 3 (4 exclus)
  return recipes.value.slice(0, recipesInHero)
})

const gridPage = ref(1)

const gridRecipes = computed(() => {
  const recipesByPage = 4
  // pour gridPage === 1 => slice(4, 7)
  // pour gridPage === 2 => slice(4, 10)
  // pour gridPage === 3 => slice(4, 13)
  return recipes.value.slice(recipesInHero, recipesInHero + gridPage.value * recipesByPage)
})

// Retourner s'il reste des recettes à afficher ou non
const moreRecipesToShow = computed(() => {
  return gridRecipes.value.length < (recipes.value.length - recipesInHero)
})

const seeMoreRecipe = () => {
  gridPage.value++
}


onMounted(async () => {
  recipes.value = await getRecipes()
})

</script>

<template>

    <div class="content">
<MyHeader/>

    <!-- <p>Recettes de la grille</p>
        <div class="recipes-list">
        <div v-for="(recipe, index) in gridRecipes" :key="index">
            <RecipeCard :id="recipe.recipe_id" :title="recipe.recipe_name" :description="recipe.recipe_description" :image="recipe.image_url" />
        </div>
        </div>
        <button v-if="moreRecipesToShow" @click="seeMoreRecipe">Voir plus de recettes</button> -->
        <div class="section">
            <p class="section__title">Recettes</p>
             <MyTitle el="h3" size="big">Toutes nos recettes</MyTitle>
        </div>
   
    <div class="recipes-list">
      <div v-for="(recipe, index) in recipes" :key="index">
        <RecipeCard :id="recipe.recipe_id" :title="recipe.recipe_name" :description="recipe.recipe_description" :image="recipe.image_url" />
      </div>
    </div>
    <MyButton class="btn-add" variant="rounded" size="regular" @click="addRecipe">Ajouter une recette</MyButton>
    <!-- recipesNames : {{ recipesNames }}<br><br>
spaghettiRecipes :{{ spaghettiRecipes }}<br><br>
hasGoalId1 {{ hasGoalId1 }}<br><br> -->

    </div>
    <MyFooter/>
</template>

<style lang="scss" scoped>
.content {
  margin: 0 rem(100);
}

.recipes-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap:rem(40);

    @media screen and (max-width: $big){
  
  grid-template-columns:  repeat(2, 1fr);
  }
  @media screen and (max-width: $large){

  grid-template-columns:  repeat(1, 1fr);
  }
}

.section {
  text-align: center;
  margin: rem(80) 0 rem(40) 0 ;
  p {
    color:$primary-color;
  }

}
.btn-add {
  display: block;
  margin: rem(60) auto;

}
</style>