<template>
  <a
    :href="href"
    target="_blank"
    class="px-2 m-2 w-25% py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  setup() {},
};
</script>
