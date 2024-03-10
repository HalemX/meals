import { createStore } from "vuex";

import firstModule from "./modules/first/state";

const store = createStore({
  modules: {
    first: firstModule,
  },
});

export default store;
