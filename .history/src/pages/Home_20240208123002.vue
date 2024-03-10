<template>
  <div>{{ meals }}</div>
</template>

<script>
import { computed } from "vue";
import store from "../store";

export default {
  setup() {
    const meals = computed(() => {
      store.state.meals;
    });

    return { meals };
  },
};
</script>
