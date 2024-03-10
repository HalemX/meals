<template>
  <input
    type="text"
    class="w-full rounded border-2 border-gray-200"
    placeholder="Search for Meals"
  />
</template>

<script setup>
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
  },
};
</script>
