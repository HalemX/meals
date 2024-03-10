<template>
  <div class="lg:mx-20">
    <div class="p-8 pb-0 absolute">
      <input
        type="text"
        class="w-full rounded border-2 border-gray-200"
        placeholder="Search for Meals"
        v-model.trim="enterName"
        @change="searchMealsByName"
      />
      <button class="special">Enter to Search</button>
    </div>
    <meals-item v-if="!emptyEnter" :meals="mealsByName"></meals-item>
    <p v-else class="text-[#ff0000] mt-2 px-8">Must Enter Name of Meal!</p>
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
    const enterName = ref("");
    const emptyEnter = ref(false);

    const store = useStore();

    const mealsByName = computed(() => {
      return store.getters.getSearchMealsByName;
    });

    function searchMealsByName() {
      if (enterName.value) {
        store.dispatch("searchMealsByName", enterName.value);
        emptyEnter.value = false;
      } else {
        emptyEnter.value = true;
      }
    }

    const rout = useRoute();
    onMounted(() => {
      enterName.value = rout.params.name;
      if (enterName.value) {
        searchMealsByName();
      }
    });

    return { searchMealsByName, mealsByName, enterName, emptyEnter };
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
.special {
  position: relative;
}
</style>
