<template>
  <div>{{ meals }}</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const meals = computed(() => {
      return store.state.meals;
    });

    return { meals };
  },
};
</script>
