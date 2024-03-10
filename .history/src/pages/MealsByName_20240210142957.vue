<template>
  <div class="p-8">
    <input
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for Meals"
      v-model="enterName"
      @change="searchMealsByName"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const enterName = ref("");

    async function searchMealsByName() {}

    return { enterName, searchMealsByName };
  },
};
</script>
