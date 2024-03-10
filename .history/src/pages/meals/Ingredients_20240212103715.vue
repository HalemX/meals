<template>
  <div class="p-8">
    <div class="p-8 pb-0">
      <input
        type="text"
        class="w-full rounded border-2 border-gray-200"
        placeholder="Search for Meals"
        v-model="enterIng"
        @change="searchMealsByIng"
      />
    </div>
    <meals-item :meals="mealsByIng"></meals-item>
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
