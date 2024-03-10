<template>
  <div class="flex flex-col p-8 justify-center">
    <div class="flex gap-1 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}</router-link
      >
    </div>
    <div>{{ meals }}</div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return { letters, meals };
  },
};
</script>
