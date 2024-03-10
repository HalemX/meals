<template>
  <div class="md:mx-20 p-8">
    <div
      class="intro flex items-center md:flex-row flex-col-reverse justify-between"
    >
      <div class="heading md:mx-10 md:width-full">
        <h1 class="text-1xl md:text-4xl font-bold mb-5">
          {{ meal.strMeal }}
        </h1>
        <div class="text-lg py-2">
          <div>
            <strong class="font-bold sm:text-1xl">Category:</strong>
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
      </div>
      <div class="rounded-lg flex justify-center">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="max-w[100%] rounded-lg w-[85%]"
        />
      </div>
    </div>

    <div class="my-3 bg-[#ef4444] text-white p-3 rounded">
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
            <li v-if="meal[`strIngredient${ind + 1}`]">
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
