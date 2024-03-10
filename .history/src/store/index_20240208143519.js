import { createStore } from "vuex";

import mealsModule from "./modules/meals/index";

const store = createStore({
  state,
  actions,
  getters,
  mutations,
});

export default store;
