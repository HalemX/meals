import { createStore } from "vuex";

import state from "./modules";
import actions from "./modules/actions";
import getters from "./modules/getters";
import mutations from "./modules/mutations";

const store = createStore({
  state,
  actions,
  getters,
  mutations,
});

export default store;
