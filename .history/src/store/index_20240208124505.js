import { createStore } from "vuex";

import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const store = createStore({
  modules: {
    first: firstModule,
  },
});

export default store;
