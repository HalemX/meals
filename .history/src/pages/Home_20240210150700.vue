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
  </div>
</template>

<script>
export default {
  setup() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return { letters };
  },
};
</script>

<style scoped>
.data-enter-from,
.data-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.data-enter-active {
  transition: all 0.3s ease-out;
}
.data-leave-active {
  transition: all 0.3s ease-in;
}

.data-enter-to,
.data-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
