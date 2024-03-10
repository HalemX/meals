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

<style scoped></style>
