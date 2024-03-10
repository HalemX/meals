<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <div>
        <router-link :to="/"></router-link>
        <router-link :to="/"></router-link>
        <router-link :to="/"></router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
