<template>
  <div class="p-8">
    <input
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for Meals"
    />
  </div>
</template>

<script>
import axiosClient from "../axiosClient";

import { onMounted, ref } from "vue";

export default {
  setup() {
    const enterName = ref("");

    async function loadMeals() {
      const response = await axiosClient.get("list.php?i=list");
      meals.value = response.data;
    }

    onMounted(() => {
      loadMeals();
    });

    return { enterName };
  },
};
</script>
