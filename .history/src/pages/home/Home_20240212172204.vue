<template>
  <div>
    <div class="p-8 pb-0 text-[#dc2626]">
      <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import MealsItem from "../../components/meals_components/MealsItem.vue";
import axiosClient from "../../axiosClient";

export default {
  component: {
    MealsItem,
  },
  setup() {
    const meals = ref([]);

    onMounted(async () => {
      for (let i = 0; i < 10; i++) {
        axiosClient
          .get(`random.php`)
          .then(({ data }) => meals.value.push(data.meals[0]));
      }
    });

    return { meals };
  },
};
</script>
