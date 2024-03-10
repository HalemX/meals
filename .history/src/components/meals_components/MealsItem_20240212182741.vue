<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl hover:scale-105 transition-all"
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
  <div v-if="!meals.length" class="flex justify-center text-gray-600 text-3xl">
    There are no meals.<slot></slot>
  </div>
</template>

<script>
import BaseButtons from "../ui/BaseButtons.vue";

export default {
  components: {
    BaseButtons,
  },
  props: ["meals"],
};
</script>
