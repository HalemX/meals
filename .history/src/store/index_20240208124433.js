import { createStore } from "vuex";

import state from "./state";

const store = createStore({
  modules: {
    first: firstModule,
  },
});

export default store;
