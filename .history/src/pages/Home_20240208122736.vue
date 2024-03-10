<template>
  <div>{{ meals }}</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const meals = computed(() => {
      useStore.state.meals;
    });
  },
};
</script>
