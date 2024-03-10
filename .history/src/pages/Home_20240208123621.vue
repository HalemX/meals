<template>
  <div>{{ meals }}</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const meals = computed(() => {
  store.state.meals;
});
</script>
