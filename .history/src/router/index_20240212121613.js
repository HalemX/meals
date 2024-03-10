import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/home/Home.vue";

import DefaultLayout from "../components/layout/DefaultLayout.vue";
import GuestLayout from "../components/layout/GuestLayout.vue";

import MealsByIngredient from "../pages/meals/MealsByIngredient.vue";
import MealsByLetters from "../pages/meals/MealsByLetters.vue";
import MealsByName from "../pages/meals/MealsByName.vue";
import MealDetails from "../components/meals_components/MealDetails.vue";
import AllIngredients from "../pages/meals/AllIngredients.vue";

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
        path: "/ingredients",
        name: "ingredients",
        component: AllIngredients,
      },
      {
        path: "/by-ingredient/:ingredient",
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
