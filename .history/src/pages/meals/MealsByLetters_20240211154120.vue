<template>
  <router-link
    :to="{ name: 'byLetter', params: { letter } }"
    v-for="letter in letters"
    :key="letter"
  >
    {{ letter }}</router-link
  >
  <meals-item :meals="mealsByLetter"></meals-item>
</template>

<script>
import MealsItem from "../../components/meals_components/MealsItem.vue";

import { computed, onMounted } from "vue";
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

    const rout = useRoute();

    function searchMealsLetter() {
      store.dispatch("searchMealsLetter", rout.params.letter);
    }

    onMounted(() => {
      searchMealsLetter();
    });

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return { letters, mealsByLetter };
  },
};
</script>
