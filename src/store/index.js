import { createStore } from "vuex";

import mealsModule from "./modules/meals/index";

const store = createStore({
  modules: {
    mealsModule,
  },
});

export default store;
