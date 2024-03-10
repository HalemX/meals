export default {
  getSearchMealsByName(state) {
    if (state.meals.length == 0) {
      state.searchMealsByName = null;
    }
    return state.meals;
  },
};
