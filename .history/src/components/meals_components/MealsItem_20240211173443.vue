<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8"
    :class="{ animate: update }"
  >
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          dicta saepe.
        </p>
      </div>
      <div class="flex items-center justify-between">
        <base-buttons :href="meal.strYoutube"></base-buttons>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtons from "../ui/BaseButtons.vue";

import { onUpdated, ref, onBeforeUpdate } from "vue";

export default {
  components: {
    BaseButtons,
  },
  props: ["meals"],
  setup() {
    const update = ref(false);
    onBeforeUpdate(() => {
      update.value = true;
    });
    onUpdated(() => {
      update.value = true;
    });
    return { update };
  },
};
</script>

<style scoped>
.animate {
  animation: animation 0.3s;
}

@keyframes animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
</style>
