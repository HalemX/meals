<template>
  <div>{{ meals }}</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const meals = computed(() => {
  const store = useStore();
  store.state.meals;
});
</script>
