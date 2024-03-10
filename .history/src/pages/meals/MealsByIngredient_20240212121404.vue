<template>
  <meals-item :meals="mealsByIng"></meals-item>
</template>

<script>
import MealsTest from "../../components/meals_components/MealsTest.vue";

import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    MealsTest,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const mealsByIng = computed(() => {
      return store.getters.getSearchMealsByIng;
    });

    onMounted(() => {
      store.dispatch("searchMealsByIng", route.params.ingredient);
    });

    return { mealsByIng };
  },
};
</script>
