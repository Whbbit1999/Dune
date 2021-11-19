import demoBlock from "vitepress-theme-demoblock";

const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用组件",
      children: [
        { text: "按钮", link: "/components/button/" },
        { text: "Icon", link: "/components/Icon/" },
      ],
    },
  ],
};

const config = {
  title: "Dune UI",
  themeConfig: { sidebar },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = demoBlock;
      md.use(demoBlockPlugin);
    },
    lineNumbers: true,
  },
};

export default config;
