<template>
  <div
    v-for="meal of mealsByName"
    :key="meal.idMeal"
    class="bg-white shadow rounded-xl"
  >
    <router-link to="/">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        dicta saepe.
      </p>
      <div class="flex items-center justify-between">
        <a
          :href="meal.strYoutube"
          target="_blank"
          class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
          >Youtube</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  props: ["enterName"],
  setup(props) {
    const store = useStore();
    function searchMealsByName() {
      store.dispatch("searchMealsByName", props.enterName.value);
    }

    const mealsByName = computed(() => {
      return store.getters.getSearchMealsByName;
    });

    const rout = useRoute();
    onMounted(() => {
      props.enterName.value = rout.params.name;
      if (enterName.value) {
        searchMealsByName();
      }
    });

    return { mealsByName };
  },
};
</script>
