<template>
  <div class="mx-20">
    <div class="flex gap-1 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}</router-link
      >
    </div>
    <transition name="route" mode="out-in">
      <meals-item :meals="mealsByLetter"></meals-item>
    </transition>
  </div>
</template>

<script>
import MealsItem from "../../components/meals_components/MealsItem.vue";

import { computed, watch, ref, onUpdated, onBeforeUpdate } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  components: {
    MealsItem,
  },
  setup() {
    const store = useStore();
    const update = ref(false);

    const rout = useRoute();

    async function searchMealsLetter() {
      update.value = true;
      await store.dispatch("searchMealsLetter", rout.params.letter);
      update.value = false;
    }

    watch(rout, () => {
      searchMealsLetter();
    });

    const mealsByLetter = computed(() => {
      return store.getters.getSearchMealsByLetter;
    });

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return { letters, mealsByLetter };
  },
};
</script>

<style scoped>
.animate {
  animation: animation 0.3s;
}

@keyframes animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
</style>
