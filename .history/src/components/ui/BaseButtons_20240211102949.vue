<template>
  <a
    v-if="!link"
    :href="href"
    target="_blank"
    class="px-2 m-2 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
  >
    <slot></slot>
  </a>
  <button
    v-else
    :href="src"
    target="_blank"
    class="px-2 m-2 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  setup() {},
};
</script>
