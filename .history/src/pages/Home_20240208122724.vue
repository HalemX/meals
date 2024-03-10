<template>
  <div>{{ meals }}</div>
</template>

<script>

import { computed } from "vue";
import { useStore } from "vuex";
export default {
  const meals = computed(() => {
    useStore.state.meals;
  });

}
</script>
