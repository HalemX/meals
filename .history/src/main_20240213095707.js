import { createApp } from "vue";

import router from "./router";
import store from "./store";
import "./style.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
