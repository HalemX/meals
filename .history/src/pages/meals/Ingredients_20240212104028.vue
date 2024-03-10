<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.idIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.idIngredient"
    >
    </router-link>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import MealsItem from "../../components/meals_components/MealsItem.vue";

export default {
  components: {
    MealsItem,
  },
  setup() {
    const store = useStore();

    const mealsByIng = computed(() => {
      return store.getters.getSearchMealsByIng;
    });

    function searchMealsByIng() {
      store.dispatch("searchMealsByIng", enterIng.value);
    }

    const rout = useRoute();
    onMounted(() => {
      enterIng.value = rout.params.ingredient;
      if (enterIng.value) {
        searchMealsByIng();
      }
    });

    return { searchMealsByIng, mealsByIng, enterIng };
  },
};
</script>

<style>
input {
  transition: 0.3s;
  caret-color: #dc2626;
}

input:focus {
  outline: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
</style>
