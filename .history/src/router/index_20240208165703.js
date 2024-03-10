import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import MealsByIngredient from "../pages/MealsByIngredient.vue";
import MealsByLetters from "../pages/MealsByLetters.vue";
import MealsByName from "../pages/MealsByName.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/by-letter/:letter",
    name: "byLetter",
    component: MealsByLetters,
  },
  {
    path: "/by-ingredient/:ingredient",
    name: "byingredient",
    component: MealsByIngredient,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealsByLetters,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
