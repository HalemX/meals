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

.slide-right-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: top center;
}

.slide-right-leave-active {
  transition: all 0.3s ease-in;
  transform-origin: top center;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style
