<template>
  <div>
    <div class="flex gap-1 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}</router-link
      >
    </div>
    <Transition name="loading">
      <meals-item :meals="mealsByLetter"></meals-item>
    </Transition>
  </div>
</template>

<script>
import MealsItem from "../../components/meals_components/MealsItem.vue";

import { computed, watch } from "vue";
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

    watch(rout, () => {
      searchMealsLetter();
    });

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return { letters, mealsByLetter };
  },
};
</script>

<style>
.loading-enter-from,
.loading-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.loading-enter-active {
  transition: all 0.3s ease-out;
}
.loading-leave-active {
  transition: all 0.3s ease-in;
}

.loading-enter-to,
.loading-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
