export default {
  getMeals(state) {
    if (state.meals.length < 0) {
      state.meals = "";
    }
    return state.meals;
  },
};
