<template>
  <div class="p-8 lg:mx-20">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <router-link
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.idIngredient },
        }"
        v-for="ingredient of hasIngDesc"
        :key="ingredient.idIngredient"
        class="block bg-[#ef4444] text-white p-3 rounded mb-3 shadow md:leading-loose"
      >
        <h3 class="text-2xl font-bold mb-4">{{ ingredient.strIngredient }}</h3>
        <p v-if="ingredient.strDescription">
          {{ ingredient.strDescription }}
        </p>
        <p v-else>No Description Found of This Ingredient.</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axiosClient from "../../axiosClient";

export default {
  setup() {
    const ingredients = ref([]);
    const hasIngDesc = ref([]);

    onMounted(() => {
      axiosClient.get("list.php?i=list").then(({ data }) => {
        ingredients.value = data.meals;
        hasIngDesc.value = ingredients.value.filter((ing) => {
          // console.log(ing.strDescription.length > 20);
          // console.log(ing.strDescription !== null);
          return ing.strDescription !== null || ing.strDescription.length > 30;
        });
      });
    });

    return { ingredients, hasIngDesc };
  },
};
</script>
