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
    <h1>{{ meals }}</h1>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const meals = computed(() => {
  return store.getters.getMeals;
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
