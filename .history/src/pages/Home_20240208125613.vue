<template>
  <div>{{ meals }}</div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const meals = computed(() => {
  store.index.meals;
});
</script>
