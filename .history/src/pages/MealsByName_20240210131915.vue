<template>
  <div class="p-8">
    <input
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for Meals"
      v-model="enterName"
    />

    <div>{{ meals }}</div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const enterName = ref("");

    const store = useStore();
    function loadMeals() {
      store.dispatch("fetchMeals");
    }

    onMounted(() => {
      loadMeals();
    });

    const ingredients = ref([]);
    const meals = computed(() => {
      return store.getters.getMeals;
      ingredients.value = meals.data;
    });

    return { meals, enterName };
  },
};
</script>
