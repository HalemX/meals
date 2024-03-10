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
    <div>
      <div v-for="meal of mealsByName" :key="meal.idMeal">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
        <h3>{{ meal.strMeal }}</h3>
        <div>
          <a :href="meal.strYoutube" target="_blank">Youtube</a>
          <router-link to="/">View</router-link>
        </div>
      </div>
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
