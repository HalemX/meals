<template>
  <div>Home</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const meals = computed(() => {
  useStore.state.meals;
});
</script>
