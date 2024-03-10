export default {
  getSearchMealsByName(state) {
    if (state.searchMealsByName.length == 0) {
      state.searchMealsByName = null;
    }
    return state.meals;
  },
};
