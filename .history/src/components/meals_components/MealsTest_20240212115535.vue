<template>
  <div class="grid grid-col-1 md:grid-cols-3 gap-5 p-8">
    <meal-item
      v-for="meal of meals"
      :key="meal.idMeal"
      :meals="meals"
    ></meal-item>
  </div>
  <div v-if="!meals.length" class="flex justify-center">There No Meals.</div>
</template>
