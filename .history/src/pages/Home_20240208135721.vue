<template>
  <div>
    <input type="text" class="w-full rounded border-5" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const meals = computed(() => {
  return store.state.meals;
});
</script>
