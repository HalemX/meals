<template>
  <div class="w-[800px] mx-auto">
    {{ meal }}
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong>
        {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong>
        {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong>
        {{ meal.strTags }}
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <div v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]"></li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axiosClient from "../axiosClient";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const meal = ref({});

    const route = useRoute();
    onMounted(() => {
      axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
        meal.value = data.meals[0] || {};
      });
    });

    return { meal };
  },
};
</script>
