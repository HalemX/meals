import { createStore } from "vuex";

import firstModule from "./modules/first/state";

const store = createStore({
  meals: ["salmon"],
  modules: {
    first: firstModule,
  },
});

export default store;
