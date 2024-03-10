<template>
  <div class="md:mx-20 p-8">
    <div
      class="intro flex items-center md:flex-row flex-col-reverse justify-between"
    >
      <div class="heading md:mx-10 text-center md:text-start w-full">
        <h1 class="text-1xl sm:text-2xl md:text-4xl font-bold mb-1">
          {{ meal.strMeal }}
        </h1>
        <div class="text-lg py-2">
          <div>
            <span class="font-bold">Category:</span>
            {{ meal.strCategory }}
          </div>
          <div>
            <span class="font-bold">Area:</span>
            {{ meal.strArea }}
          </div>
          <div>
            <span v-if="meal.strTags" class="font-bold">Tags:</span>
            {{ meal.strTags }}
          </div>
        </div>
      </div>
      <div class="rounded-lg flex justify-center md:justify-end">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="max-w[100%] rounded-lg md:w-[100%] w-[70%]"
        />
      </div>
    </div>

    <div
      class="my-3 bg-[#ef4444] shadow text-white p-5 rounded md:leading-loose"
    >
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
