export default {
  getSearchMealsByName(state) {
    if (state.searchMealsByName.length === 0) {
      return;
    }
    return state.searchMealsByName;
  },
  getSearchMealsByLetter(state) {
    return state.searchMealsByLetter;
  },
  getSearchMealsByIng(state) {
    return state.searchMealsByIng;
  },
};
