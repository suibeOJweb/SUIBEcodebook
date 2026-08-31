import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"SUIBECodeCook","text":"编程实践学习手册","tagline":"写给上海对外经贸大学（SUIBE）学子的一份入门与进阶指南","image":{"src":"/logo.png","alt":"上海对外经贸大学校徽"},"actions":[{"theme":"brand","text":"开始阅读","link":"/01-第一课-环境与工具"},{"theme":"alt","text":"在 GitHub 上查看","link":"https://github.com/Vorest3679/SUIBEcodebook"}]},"features":[{"title":"🛠️ 环境工具","details":"科学上网、环境变量、翻译插件、Git/GitHub/IDE、大模型、学会提问，以及一个 vibe coding 小项目。","link":"/01-第一课-环境与工具"},{"title":"🎯 兴趣方向","details":"如何从零开始\\"玩\\"AI、计算机、大数据这些领域，找到真正感兴趣的方向。","link":"/02-兴趣方向介绍"},{"title":"💼 就业介绍","details":"兴趣不能当饭吃？这里聊聊怎么把技术变成饭碗。","link":"/03-就业方向介绍"},{"title":"📚 理论课程","details":"计算机核心课程与理论学习路线梳理。","link":"/04-理论与课程介绍"},{"title":"🔗 资源推荐","details":"优质课程、文档、社区与工具推荐，持续更新。","link":"/05-资源推荐"},{"title":"💻 程序语言","details":"常用编程语言特点与入门建议。","link":"/06-程序语言介绍"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="为什么写这本-codebook" tabindex="-1">为什么写这本 Codebook <a class="header-anchor" href="#为什么写这本-codebook" aria-label="Permalink to &quot;为什么写这本 Codebook&quot;">​</a></h2><p>直话直说了： 一切都源自于笔者自主拓展探索的困难。</p><p>要知道，笔者是人工智能专业的第二届学生，而且由于商校对于计算机，ai领域也是刚开的情况，这就导致了一个问题：各方面的资源，经验都过于短缺。笔者在大一下学期就跟两位大数据的学长组建了一支ACM队伍，当时网络赛成功入围，也在学校组织了一下院级活动，可惜在济南区域赛后打了铁，之后学长和笔者由于各方面忙其他的事情，最后不告而终。（而ACM本身如何，那更是后话了） 笔者也是一名兴趣使然的学生，当时为什么没有对真正的工程领域入行，直到大三上学期才算是对前端网站感兴趣，主要是因为网上常见的，过于boring，要么动不动上高并发微容器推理框架这些对于初学者来说完全陌生的项目，要么就是像菜鸟，尚硅谷这类培训班的资源课，然后项目还是那种对我们而言没啥服务于我们自身的管理系统。最后呢，在看thoughts memo的文章时，偶然接触到如何搭建并上线一个基本的网站，虽然这个网站只是一个html，然后还挂在github域名上面并没有涉及到服务器本身的概念，但是这依旧是我自己创作的第一个作品，然后慢慢地入了前端领域。 至于agent领域，一切起源于我在一次技术群的观察，给一家agent初创投了简历，然后老板给了我一次黑客松一样的面试，几天内构建一个类似于claude code的项目，然后博客可以看公司发的。虽然本身比较失败吧，gaia测试通过率很低，但我同样意识到ai原来也可以帮我创造点什么东西，于是开始看agent知识了。 我花一定时间去说明这些经历就是为了印证一件事情，ai领域/计算机领域其实是一门很有意思的学科，不单单只是面向工作编程，你在创造的同时收获了知识，收获了工程经验，这时候再去实习，不说信手拈来吧，但是确实预置的准备知识精力会少很多。</p><p>另外的话ai时代的到来有着另一个优势——了解技术的门槛降低。你可以向ai提问，向ai咨询如何从零开始，主动出击，而不是对着一堆高难名词，面试经验发愁。笔者是相当提倡学弟学妹vibe coding开始的，不要单单听“哦，你一定需要好好先听完操作系统，计算机网络，计算机体系结构，数据结构与算法...，这样才能上手vibe”。是，我承认这些传统课程很有必要，在踩了很多坑之后你会发现这些课需要好好听，但这并不意味着你就没有资格去上手一个项目。多用token，多动脑，多借助ai拓展思路，这是相当重要的。</p><p>所以吧，希望大伙秉持着兴趣学习。随着 AI 时代的到来，未来越来越不确定，萝卜坑也没有以前那么多了——以兴趣驱动的长期收益，正在逐渐赶上功利学习的短期收益（不过也可能是一厢情愿，毕竟市场上劣币驱逐良币的也不少）。</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="/SUIBEcodebook/01-第一课-环境与工具">第一课：环境与工具</a> —— 科学上网、环境变量、翻译插件、Git/GitHub/IDE、大模型、学会提问，以及一个 vibe coding 小项目</li><li><a href="/SUIBEcodebook/02-兴趣方向介绍">面向兴趣介绍</a> —— 如何从零开始&quot;玩&quot;AI、计算机、大数据这些领域</li><li><a href="/SUIBEcodebook/03-就业方向介绍">面向就业介绍</a> —— 有时候兴趣不能当饭吃，知道有些同学需要挣钱</li><li><a href="/SUIBEcodebook/04-理论与课程介绍">理论与课程介绍</a></li><li><a href="/SUIBEcodebook/05-资源推荐">资源推荐</a></li><li><a href="/SUIBEcodebook/06-程序语言介绍">程序语言介绍</a></li></ul><h2 id="参与贡献" tabindex="-1">参与贡献 <a class="header-anchor" href="#参与贡献" aria-label="Permalink to &quot;参与贡献&quot;">​</a></h2><p>欢迎补充各方向的学习路径、踩坑经验和资源推荐。直接在对应章节的 md 文件中修改并提交 PR 即可。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
