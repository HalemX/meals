<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <div>
        <router-link to="/">Search Meals</router-link>
        <router-link to="/">Meals By Letter</router-link>
        <router-link to="/">Meals By Ingredients</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
