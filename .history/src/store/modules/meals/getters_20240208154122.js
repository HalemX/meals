export default {
  getMeals(state) {
    if (state.meals.length < 0) {
      state.meals = null;
    }
    // return state.meals;
  },
};
