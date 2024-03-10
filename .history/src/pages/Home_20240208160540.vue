<template>
  <div class="flex flex-col p-8 justify-center">
    <input
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for Meals"
    />
    <div class="flex gap-1 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}</router-link
      >
    </div>
    <div>{{ meals }}</div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    function loadMeals() {
      store.dispatch("fetchMeals");
    }

    onMounted(function () {
      loadMeals();
    });

    const meals = computed(() => {
      return store.getters.getMeals;
    });

    return { letters, meals };
  },
};
</script>
