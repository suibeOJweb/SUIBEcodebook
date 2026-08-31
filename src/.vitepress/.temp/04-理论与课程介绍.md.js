import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"理论与课程介绍","description":"","frontmatter":{},"headers":[],"relativePath":"04-理论与课程介绍.md","filePath":"04-理论与课程介绍.md","lastUpdated":null}');
const _sfc_main = { name: "04-理论与课程介绍.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="理论与课程介绍" tabindex="-1">理论与课程介绍 <a class="header-anchor" href="#理论与课程介绍" aria-label="Permalink to &quot;理论与课程介绍&quot;">​</a></h1><blockquote><p>返回 <a href="/SUIBEcodebook/">目录</a></p></blockquote><p>实践之外，这些理论课程决定了你能走多远。</p><h2 id="程序语言设计、算法与数据结构" tabindex="-1">程序语言设计、算法与数据结构 <a class="header-anchor" href="#程序语言设计、算法与数据结构" aria-label="Permalink to &quot;程序语言设计、算法与数据结构&quot;">​</a></h2><p>（待补充）</p><h2 id="数学主课" tabindex="-1">数学主课 <a class="header-anchor" href="#数学主课" aria-label="Permalink to &quot;数学主课&quot;">​</a></h2><p>高等数学、线性代数、概率论。</p><p>（待补充）</p><h2 id="ai-主课" tabindex="-1">AI 主课 <a class="header-anchor" href="#ai-主课" aria-label="Permalink to &quot;AI 主课&quot;">​</a></h2><p>机器学习、深度学习。</p><p>（待补充）</p><h2 id="计算机主课" tabindex="-1">计算机主课 <a class="header-anchor" href="#计算机主课" aria-label="Permalink to &quot;计算机主课&quot;">​</a></h2><p>计算机网络、操作系统、计算机体系与结构（408 那一套）。</p><p>（待补充）</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("04-理论与课程介绍.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _04________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _04________ as default
};
