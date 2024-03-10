export default {
  getSearchMealsByName(state) {
    if (state.searchMealsByName.length < 0) {
      return;
    }
    return state.searchMealsByName;
  },
};
