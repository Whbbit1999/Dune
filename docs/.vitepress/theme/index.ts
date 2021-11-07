import Theme from "vitepress/dist/client/theme-default";

import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";

import ButtonVue from "../../../src/components/Button.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component("demo", Demo),
      app.component("demo-block", DemoBlock),
      app.component("du-button", ButtonVue);
  },
};
