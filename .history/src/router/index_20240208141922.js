import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import MealsList from "../pages/MealsList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealsList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
