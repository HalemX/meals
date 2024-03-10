<template>
  <div>
    {{ meal }}
  </div>
</template>

<script>
import axiosClient from "../axiosClient";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const meal = ref({});

    const route = useRoute();
    onMounted(() => {
      const response = axiosClient.get(`lookup.php?i=${route.params.id}`);
      meal.value = response.data;
    });
    return { meal };
  },
};
</script>
