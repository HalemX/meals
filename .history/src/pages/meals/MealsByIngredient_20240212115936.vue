<template>
  <meals-test :meals="meals"></meals-test>
</template>

<script>
import MealsTest from "../../components/meals_components/MealsTest.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    MealsTest,
  },
};
</script>
