<template>
  <div class="flex gap-1 justify-center">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
    >
      {{ letter }}</router-link
    >
    <meals-item :meals="mealsByLetter"></meals-item>
  </div>
</template>

<script>
import MealsItem from "../../components/meals_components/MealsItem.vue";

import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  components: {
    MealsItem,
  },
  setup() {
    const store = useStore();

    const mealsByLetter = computed(() => {
      return store.getters.getSearchMealsByLetter;
    });

    function searchMealsByLetter() {
      store.dispatch("searchMealsByLetter", enterName.value);
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return { letters };
  },
};
</script>
