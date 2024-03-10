<template>
  <div>
    {{ meal }}
  </div>
</template>

<script>
import { ref } from "vue";
import {useRoute}

export default {
  setup() {
    const meal = ref({});

    const route = useRoute();
  },
};
</script>
