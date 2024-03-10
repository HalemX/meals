<template>
  <div class="bg-[#dc2626]">
    <header
      class="text-white shadow h-16 flex justify-between items-stretch bg-[#dc2626] md:mx-20"
    >
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <router-link
            class="navbar-brand text-3xl inline-flex items-center h-full px-5 font-bold"
            :to="{ name: 'home' }"
            >Home</router-link
          >

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
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
