<template>
  <div>
    <div class="p-8 pb-0">
      <input
        type="text"
        class="w-full rounded border-2 border-gray-200"
        placeholder="Search for Meals"
        v-model="enterName"
        @change="searchMealsByName"
      />
    </div>
    <all-meals-by-name :mealsByName="mealsByName"></all-meals-by-name>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import AllMealsByName from "../components/AllMealsByName.vue";

export default {
  components: {
    AllMealsByName,
  },
  setup() {
    const enterName = ref("");

    const store = useStore();

    const mealsByName = computed(() => {
      return store.getters.getSearchMealsByName;
    });

    function searchMealsByName() {
      store.dispatch("searchMealsByName", enterName.value);
    }

    const rout = useRoute();
    onMounted(() => {
      enterName.value = rout.params.name;
      if (enterName.value) {
        searchMealsByName();
      }
    });

    return { searchMealsByName, mealsByName, enterName };
  },
};
</script>
