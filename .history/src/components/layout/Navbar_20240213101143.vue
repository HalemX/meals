<template>
  <div class="bg-[#dc2626]">
    <header
      class="text-white shadow h-16 flex justify-between items-stretch bg-[#dc2626] md:mx-20"
    >
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link
            class="navbar-brand text-3xl inline-flex items-center h-full px-5 font-bold"
            :to="{ name: 'home' }"
            >Home</router-link
          >
            sdda
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                  class="inline-flex items-center px-2 h-full transition-colors hover:bg-[#ef4444]"
                  :to="{ name: 'byName' }"
                  aria-current="page"
                  >Search Meals</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link inline-flex items-center px-2 h-full transition-colors hover:bg-[#f87171]"
                  :to="{ name: 'byLetter' }"
                  >Meals By Letter</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
