import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import MealsByIngredient from "../pages/MealsByIngredient.vue";
import MealsByLetters from "../pages/MealsByLetters.vue";
import MealsByName from "../pages/MealsByName.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: MealsByLetters,
  },
  {
    path: "/by-ingredient/:ingredient?",
    name: "byIngredient",
    component: MealsByIngredient,
  },
  {
    path: "/by-name/:name?",
    name: "byName",
    component: MealsByName,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
