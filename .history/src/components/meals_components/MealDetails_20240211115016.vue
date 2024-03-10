<template>
  <div class="w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
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

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <div v-for="(_, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </div>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <div v-for="(_, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </div>
        </ul>
      </div>
      <div class="flex items-center">
        <base-buttons class="mx-0" :href="meal.strYoutube"
          >Youtube</base-buttons
        >
        <base-buttons link="link" :src="meal.strSource"
          >View Original Source</base-buttons
        >
      </div>
    </div>
  </div>
</template>

<script>
import axiosClient from "../../axiosClient";
import BaseButtons from "../ui/BaseButtons.vue";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    BaseButtons,
  },
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
