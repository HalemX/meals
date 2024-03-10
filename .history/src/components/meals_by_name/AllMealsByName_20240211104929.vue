<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of mealsByName"
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
        <base-buttons link :href="meal.strYoutube">Youtube</base-buttons>
        <base-buttons type="button" :src="meal.strSource">Source</base-buttons>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtons from "../ui/BaseButtons.vue";

export default {
  components: {
    BaseButtons,
  },
  props: ["mealsByName"],
  setup() {},
};
</script>
