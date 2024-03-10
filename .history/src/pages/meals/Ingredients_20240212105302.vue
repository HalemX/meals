<template>
  <div class="p-8">
    {{ ingredients }}
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.idIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.idIngredient"
      class="block bg-[#ef4444] text-white p-3 rounded mb-3 shadow md:leading-loose"
    >
      <h3>{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axiosClient from "../../axiosClient";

export default {
  setup() {
    const ingredients = ref([]);

    onMounted(() => {
      axiosClient.get("list.php?i=list").then(({ data }) => {
        ingredients.value = data.meals;
        console.log(ingredients.strDescription);
      });
    });

    return { ingredients };
  },
};
</script>
