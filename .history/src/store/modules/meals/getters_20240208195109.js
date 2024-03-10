export default {
  getMeals(state) {
    if (state.meals.length == 0) {
      state.meals = null;
    }
    return state.meals;
  },
  getMealsByTitle(state) {
    return state.meals.filter((meal) => {
      meal.title.includes("F");
    });
  },
};
