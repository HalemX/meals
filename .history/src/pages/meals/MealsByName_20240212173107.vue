<template>
  <div class="lg:mx-20">
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">
        Search Meals by Name
      </h1>
      <div
        class="rounded border-2 border-gray-200 bg-white flex"
        :class="{ invalid: emptyEnter }"
      >
        <input
          type="text"
          class="rounded border-2 border-gray-200"
          placeholder="Search for Meals"
          v-model.trim="enterName"
          @change="searchMealsByName"
        />
        <button
          @click="searchMealsByName"
          class="m-2 px-3 transition ease-in-out delay-150 sm:mt-2 border-[#ef4444] bg-[#ef4444] hover:scale-105 hover:bg-[#f87171] duration-300 text-white py-1 rounded"
        >
          Enter to Search
        </button>
      </div>
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

<style scoped>
input {
  transition: 0.3s;
  caret-color: #dc2626;
  flex-grow: 2;
  border: none;
}
input:focus {
  outline: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.invalid {
  border-color: red;
}
@media (max-width: 420px) {
  div {
    flex-direction: column;
    background-color: transparent;
    border: none;
  }
  p {
    width: 260px;
    margin: auto;
  }
}
</style>
