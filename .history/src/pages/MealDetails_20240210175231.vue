<template>
  <div>
    {{ meal }}
  </div>
</template>

<script>
import axiosClient from "../../../axiosClient";

import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const meal = ref({});

    const route = useRoute();
  },
};
</script>
