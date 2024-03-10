<template>
  <a
    v-if="!link"
    :href="href"
    target="_blank"
    class="transition ease-in-out delay-150 border-[#dc2626] bg-[#dc2626] hover:-translate-y-1 hover:scale-110 hover:bg-[#f87171] duration-300 px-2 m-2 py-2 rounded border-2 text-white border-0"
  >
    <slot></slot>
  </a>
  <button
    v-else
    :href="src"
    target="_blank"
    class="transition ease-in-out delay-150 bg-[#ef4444] hover:-translate-y-1 hover:scale-110 hover:bg-[#f87171] duration-300 text-white px-2 m-2 py-2 rounded border-2 border-0"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
    },
    src: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  setup() {},
};
</script>
