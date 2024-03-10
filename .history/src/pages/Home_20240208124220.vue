<template>
  <div>{{ meals }}</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const meals = computed(() => {
      return store.index.meals;
    });

    return { meals };
  },
};
</script>
