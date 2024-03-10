<template>
  <header
    class="txt=white shadow h-16 flex justify-between items-stretch bg-[#dc2626]"
  >
    <router-link
      class="inline-flex items-center h-full px-5"
      :to="{ name: 'home' }"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        :to="{ name: 'byName' }"
        >Search Meals</router-link
      >
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        :to="{ name: 'byLetter' }"
        >Meals By Letter</router-link
      >
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        :to="{ name: 'byIngredient' }"
        >Meals By Ingredient</router-link
      >
    </div>
  </header>
</template>

<script>
export default {};
</script>
