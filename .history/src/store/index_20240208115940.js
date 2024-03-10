import { createStore } from "vuex";

import firstModule from "./modules/first/index";

const store = createStore({
  first: firstModule,
});
