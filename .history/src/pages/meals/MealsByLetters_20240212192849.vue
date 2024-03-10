<template>
  <div class="lg:mx-20">
    <div class="flex flec-col justify-center">
      <span> </span>
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in FirstLetters"
        :key="letter"
        class="w-fit mx-1 bg-[#dc2626] px-2 rounded text-white hover:scale-150 hover:mx-2 transition-all mt-5 text-2xl"
      >
        {{ letter }}</router-link
      >
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in SecondLetters"
        :key="letter"
        class="w-fit mx-1 bg-[#dc2626] px-2 rounded text-white hover:scale-150 hover:mx-2 transition-all mt-5 text-2xl"
      >
        {{ letter }}</router-link
      >
    </div>

    <meals-item :class="{ animate: update }" :meals="mealsByLetter"
      >please select letter.</meals-item
    >
  </div>
</template>

<script>
import MealsItem from "../../components/meals_components/MealsItem.vue";

import { computed, watch, ref } from "vue";

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
      try {
        await store.dispatch("searchMealsLetter", rout.params.letter);
      } catch (error) {
        error = error.message || "Something failed";
      }
      update.value = false;
    }

    watch(rout, () => {
      searchMealsLetter();
    });

    const mealsByLetter = computed(() => {
      return store.getters.getSearchMealsByLetter;
    });

    const FirstLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0, 13);
    const SecondLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(14, 28);

    return { FirstLetters, SecondLetters, mealsByLetter, update };
  },
};
</script>

<style scoped>
.animate {
  animation: animation 0.9s ease-in;
}

@keyframes animation {
  40% {
    opacity: 0;
    transform: scale(0.3);
    transform: translateY(-30px);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.5);
    transition: all 0.9s ease-out;
  }
  70% {
    opacity: 0.5;
    transform: scale(0.7);
    transition: all 0.9s ease-out;
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
