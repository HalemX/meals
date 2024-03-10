<template>
  <div>
    <navbar />
    <main>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
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
.loading-enter-from,
.loading-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.loading-enter-active {
  transition: all 0.3s ease-out;
}
.loading-leave-active {
  transition: all 0.3s ease-in;
}

.loading-enter-to,
.loading-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
