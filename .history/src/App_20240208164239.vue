<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link
        class="inline-flex items-center h-full px-5"
        :to="{ name: 'home' }"
        >Home</router-link
      >
      <div class="flex items-center gap-1">
        <router-link
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200"
          to="/"
          >Search Meals</router-link
        >
        <router-link
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200"
          to="/"
          >Meals By Letter</router-link
        >
        <router-link
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200"
          to="/"
          >Meals By Ingredients</router-link
        >
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
