import { createStore } from "vuex";

import state from "./state";

const store = createStore({
  meals: ["sss"],
  modules: {
    first: firstModule,
  },
  state,
});

export default store;
