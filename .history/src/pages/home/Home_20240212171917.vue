<template>
  <div>
    <meals-item :meals="meals"></meals-item>
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
