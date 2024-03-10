<template>
  <div class="flex p-8">
    <input type="text" class="w-full rounded border-2 border-gray-200" />
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
