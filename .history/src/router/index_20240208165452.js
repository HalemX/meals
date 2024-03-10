import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import MealsByIngredients from "../pages/MealsByIngredient.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: SearchByIngredients,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
