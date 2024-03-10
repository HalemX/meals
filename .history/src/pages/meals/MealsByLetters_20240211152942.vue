<template>
  <div class="flex gap-1 justify-center">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
    >
      {{ letter }}</router-link
    >
    <all-meals-by-name :mealsByName="mealsByName"></all-meals-by-name>
  </div>
</template>

<script>
import MealsItem from "../../components/meals_components/MealsItem.vue";

import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  components: {
    AllMealsByName,
  },
  setup() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return { letters };
  },
};
</script>
