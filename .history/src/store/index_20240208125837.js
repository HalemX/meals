import { createStore } from "vuex";

import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const store = createStore({
  meals: ["sss"],
  modules: {
    first: firstModule,
  },
  state,
});

export default store;
