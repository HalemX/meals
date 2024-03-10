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
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
          :to="{ name: 'byName' }"
          >Search Meals</router-link
        >
        <router-link
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
          :to="{ name: 'byName' }"
          >Meals By Letter</router-link
        >
        <router-link
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
          :to="{ name: 'byName' }"
          >Meals By Ingredients</router-link
        >
      </div>
    </header>
    <main>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.4s ease-out;
}
.route-enter-active {
  transition: all 0.4s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
