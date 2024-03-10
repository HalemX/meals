export default {
  setSearchMealsByName(state, meals) {
    state.searchMealsByName = meals;
  },
  setSearchMealsByLetter(state, meals) {
    if (meals !== null) {
      state.searchMealsByLetter = meals;
    }
  },
  setSearchMealsByIng(state, meals) {
    state.searchMealsByIng = meals;
  },
};
