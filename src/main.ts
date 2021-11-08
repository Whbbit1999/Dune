import { createApp } from "vue";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import App from "./App.vue";

const app = createApp(App);

app.use(BootstrapIconsPlugin);
app.mount("#app");
