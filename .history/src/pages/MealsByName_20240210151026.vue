<template>
  <div class="p-8">
    <input
      type="text"
      class="w-full rounded border-2 border-gray-200"
      placeholder="Search for Meals"
      v-model="enterName"
      @change="searchMealsByName"
    />
    <div>
      {{ mealsByName }}
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

<style scoped>
.data-enter-from,
.data-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.data-enter-active {
  transition: all 0.3s ease-out;
}
.data-leave-active {
  transition: all 0.3s ease-in;
}

.data-enter-to,
.data-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
