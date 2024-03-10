<template>
  <div class="bg-[#dc2626]">
    <header
      class="text-white shadow h-16 flex justify-between items-stretch bg-[#dc2626] md:mx-20"
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

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <router-link
            class="text-3xl inline-flex items-center h-full px-5 font-bold"
            :to="{ name: 'home' }"
            >Home</router-link
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
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
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
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
