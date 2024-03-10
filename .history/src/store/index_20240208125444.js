import { createStore } from "vuex";

import firstModule from "./modules/first/index";
import state from "./state";

const store = createStore({
  meals: ["sss"],
  modules: {
    first: firstModule,
  },
  state,
});

export default store;
