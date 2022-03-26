import { createApp } from "vue";
import App from "./App.vue";

const bootstrap = () => {
  const app = createApp(App);
  app.mount("#app");
};

bootstrap();
