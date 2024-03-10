<template>
  <div class="flex p-8 justify-center">
    <input
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for Meals"
    />

    <router-link to="/"></router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const meals = computed(() => {
  return store.state.meals;
});
</script>
