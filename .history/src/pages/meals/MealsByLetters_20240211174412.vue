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
    <transition name="slide-right" mode="out-in">
      <meals-item :meals="mealsByLetter"></meals-item>
    </transition>
  </div>
</template>

<script>
import MealsItem from "../../components/meals_components/MealsItem.vue";

import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { onUpdated, ref, onBeforeUpdate } from "vue";

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

    const update = ref(false);

    onBeforeUpdate(() => {
      update.value = false;
    });

    onUpdated(() => {
      update.value = true;
      console.log(update.value);
    });
    console.log(update.value);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return { letters, mealsByLetter, update };
  },
};
</script>

<style scoped>
.slide-right-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: top center;
}

.slide-right-leave-active {
  transition: all 0.3s ease-in;
  transform-origin: top center;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
