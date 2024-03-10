<template>
  <div>
    <div class="p-8">
      <input
        type="text"
        class="w-full rounded border-2 border-gray-200"
        placeholder="Search for Meals"
        v-model="enterName"
        @change="searchMealsByName"
      />
    </div>
    <div v-for="meal in mealsByName" :key="meal.idMeal">
      <!-- <img :src="meal.strMealThumb" alt="" /> -->
      {{ meal }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const enterName = ref("");

    const store = useStore();
    function searchMealsByName() {
      store.dispatch("searchMealsByName", enterName.value);
    }

    const mealsByName = computed(() => {
      return store.getters.getSearchMealsByName;
    });

    return { enterName, searchMealsByName, mealsByName };
  },
};
</script>
