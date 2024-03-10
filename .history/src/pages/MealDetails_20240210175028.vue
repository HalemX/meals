<template>
  <div>
    {{ meal }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const meal = ref({});
  },
};
</script>
