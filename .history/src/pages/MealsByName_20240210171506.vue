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
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <all-meals-by-name></all-meals-by-name>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  setup(props, context) {
    const store = useStore();

    const mealsByName = computed(() => {
      return store.getters.getSearchMealsByName;
    });

    const rout = useRoute();
    onMounted(() => {
      enterName.value = rout.params.name;
      if (enterName.value) {
        searchMealsByName();
      }
    });

    context.emit("search", searchMealsByName);

    return { mealsByName };
  },
};
</script>
