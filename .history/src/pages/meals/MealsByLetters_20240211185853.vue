<template>
  <div class="animation mx-20" :class="{ animate: update }">
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

    // async function searchMealsLetter() {
    //   update.value = true;
    //   await store.dispatch("searchMealsLetter", rout.params.letter);
    //   update.value = false;
    // }

    async function searchMealsLetter() {
      update.value = true;
      try {
        await store.dispatch("searchMealsLetter", rout.params.letter);
      } catch (error) {
        error = error.message || "Something failed";
      }
      update.value = false;
      console.log(update.value);
    }

    watch(rout, () => {
      searchMealsLetter();
    });

    const mealsByLetter = computed(() => {
      return store.getters.getSearchMealsByLetter;
    });

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return { letters, mealsByLetter, update };
  },
};
</script>

<style scoped>
.animation {
  transition: 0.9s;
}
.animate {
  animation: animation 0.9s ease-out 0.9ms;
}

@keyframes animation {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }

  .
}
</style>
