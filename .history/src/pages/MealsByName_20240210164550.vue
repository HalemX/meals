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
import { ref } from "vue";
import AllMealsByName from "../components/AllMealsByName.vue";

export default {
  components: {
    AllMealsByName
  }
  setup() {
    const enterName = ref("");

    return { enterName };
  },
};
</script>
