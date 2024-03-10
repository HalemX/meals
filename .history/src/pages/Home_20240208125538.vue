<template>
  <div>{{ meals }}</div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const store = useStore();
const meals = computed(() => {
  store.state.meals;
});
</script>
