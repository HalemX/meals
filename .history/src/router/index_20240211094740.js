import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/layout/DefaultLayout.vue";
import Home from "../pages/home/Home.vue";
import MealsByIngredient from "../pages/MealsByIngredient.vue";
import MealsByLetters from "../pages/MealsByLetters.vue";
import MealsByName from "../pages/MealsByName.vue";

import MealDetails from "../pages/MealDetails.vue";

import GuestLayout from "../components/GuestLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
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
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;