<template>
  <div class="p-8 lg:mx-20">
    <h1 class="text-4xl font-bold mb-4 text-[#dc2626]">Ingredients</h1>

    <div
      class="rounded border-2 border-gray-200 bg-white flex"
      :class="{ invalid: emptyEnter }"
    >
      <input
        type="text"
        class="rounded border-2 border-gray-200"
        placeholder="Search for Meals"
        v-model.trim="enterName"
        @change="searchMealsByName"
      />
      <button
        @click="searchMealsByName"
        class="m-2 px-3 transition ease-in-out delay-150 sm:mt-2 border-[#ef4444] bg-[#ef4444] hover:scale-105 hover:bg-[#f87171] duration-300 text-white py-1 rounded"
      >
        Enter to Search
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-5">
      <router-link
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of hasIngDesc"
        :key="ingredient.idIngredient"
        class="block bg-[#ef4444] text-white p-3 rounded mb-3 shadow text-center hover:scale-110 transition-all mt-5 text-2xl"
      >
        <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
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
          return ing.strDescription !== null;
        });
      });
    });

    return { ingredients, hasIngDesc };
  },
};
</script>
