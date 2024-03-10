<template>
  <div>
    <div class="grid grid-col-1 md:grid-cols-3 gap-5 p-8">
      <meals-item
        v-for="meal of meals"
        :key="meal.idMeal"
        :meals="meals"
      ></meals-item>
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600">
      There No Meals of This ingredient.
    </div>
  </div>
</template>

<script>
import MealsItem from "./MealsItem.vue";

export default {
  components: {
    MealsItem,
  },
  props: ["meals"],
};
</script>
