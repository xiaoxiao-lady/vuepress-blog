module.exports = {
  // sidebarDepth: 1,
  // displayAllHeaders: true,
  "/docs/test/": [
    {
      title: "测试一",
      collapsable: true,
      children: [
        {
          title: "测试一一",
          path: "/docs/technology/HTML5/sss.md",
        },
      ],
    },
    {
      title: "测试二",
      collapsable: true,
      children: [
        {
          title: "测试二一",
          path: "/docs/technology/HTML5/sss.md",
        },
      ],
    },
  ],
  "/docs/technology/": [
    // "/docs/technology/first/",//这个就是他点击跳转到他的子集，普通的直接是下拉的自己
    // 文件名不能起名index.md
    {
      title: "HTML5",
      collapsable: true,
      children: [
        {
          title: "标签",
          path: "/docs/technology/HTML5/sss.md",
        },
        {
          title: "测试",
          collapsable: false,
          path: "/docs/test/",
        },
      ],
    },
    {
      title: "CSS3",
      collapsable: true,
      children: [
        {
          title: "滚动条",
          collapsable: true,
          path: "/docs/technology/css3/roll.md",
        },
      ],
    },
    {
      title: "JS",
      collapsable: true,
      children: [
        {
          title: "异步编程",
          collapsable: true,
          path: "/docs/technology/Js/Asyn/read.md",
        },
      ],
    },
    {
      title: "前端框架",
      collapsable: true,
      children: [
        {
          title: "Vue",
          collapsable: true,
          path: "/docs/technology/front-Frame/Vue/vue.md",
        },
        {
          title: "React",
          collapsable: true,
          path: "/docs/technology/front-Frame/React/react.md",
        },
      ],
    },
    {
      title: "浏览器",
      collapsable: true,
      children: [
        {
          title: "兼容性",
          collapsable: true,
          path: "/docs/technology/browser/jrx/jrx.md",
        },
      ],
    },
    {
      title: "资源构建工具",
      collapsable: true,
      children: [
        {
          title: "Webpack",
          collapsable: true,
          path: "/docs/technology/webpack/webpack.md",
        },
      ],
    },
    {
      title: "版本控制工具",
      collapsable: true,
      children: [
        {
          title: "Git",
          collapsable: true,
          path: "/docs/technology/Git/git.md",
        },
      ],
    },
  ],
};
