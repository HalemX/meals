export default {
  getMeals(state) {
    return state.meals ? state.meals.length > 0 : null;
  },
};
