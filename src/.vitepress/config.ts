import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "../content",
  outDir: "../dist",
  base: "/SUIBEcodebook/",
  title: "SUIBECodeCook",
  description: "写给 SUIBE 学子的编程实践学习手册",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/SUIBEcodebook/logo.png", type: "image/png" }],
    ["meta", { property: "og:title", content: "SUIBECodeCook" }],
    ["meta", { property: "og:description", content: "写给 SUIBE 学子的编程实践学习手册" }],
    ["meta", { property: "og:image", content: "/SUIBEcodebook/logo.png" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "GitHub", link: "https://github.com/Vorest3679/SUIBEcodebook" },
    ],
    sidebar: [
      {
        text: "目录",
        items: [
          { text: "第一课：环境与工具", link: "/01-第一课-环境与工具" },
          { text: "面向兴趣介绍", link: "/02-兴趣方向介绍" },
          { text: "面向就业介绍", link: "/03-就业方向介绍" },
          { text: "理论与课程介绍", link: "/04-理论与课程介绍" },
          { text: "资源推荐", link: "/05-资源推荐" },
          { text: "程序语言介绍", link: "/06-程序语言介绍" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Vorest3679/SUIBEcodebook",
      },
    ],
    footer: {
      message: "以兴趣驱动学习",
      copyright: "Copyright © 2026 SUIBECodeCook Contributors",
    },
    search: {
      provider: "local",
    },
    outline: {
      level: "deep",
      label: "本页目录",
    },
  },
});
