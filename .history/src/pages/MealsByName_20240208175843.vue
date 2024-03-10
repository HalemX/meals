<template>
  <input
    type="text"
    class="w-full rounded border-2 border-gray-200"
    placeholder="Search for Meals"
  />
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

export default {
  setup() {
    function loadMeals() {
      store.dispatch("fetchMeals");
    }

    onMounted(() => {
      loadMeals();
    });

    const meals = computed(() => {
      return store.getters.getMeals;
    });

    return { meals };
  },
};
</script>
