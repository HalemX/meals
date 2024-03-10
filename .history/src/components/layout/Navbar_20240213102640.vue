<template>
  <div class="bg-[#dc2626]">
    <header
      class="text-white shadow h-16 flex justify-between items-stretch bg-[#dc2626] md:mx-20"
    >
      <router-link
        class="text-3xl inline-flex items-center h-full px-5 font-bold"
        :to="{ name: 'home' }"
        >Home</router-link
      >
      <div class="flex items-center gap-3">
        <router-link
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-[#ef4444]"
          :to="{ name: 'byName' }"
          >Search Meals</router-link
        >
        <router-link
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-[#f87171]"
          :to="{ name: 'byLetter' }"
          >Meals By Letter</router-link
        >
        <router-link
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-[#f87171]"
          :to="{ name: 'ingredients' }"
          >Meals By Ingredient</router-link
        >
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  box-shadow: none !important;
}
</style>
