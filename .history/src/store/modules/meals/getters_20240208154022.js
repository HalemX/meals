export default {
  getMeals(state) {
    if (state.meals.length < 0) {
      return;
    }
    return state.meals;
  },
};
