import{_ as c,o as i,c as r,a as n,b as a,d as s,e as t,r as e}from"./app.a23ae05c.js";const l={},d=n("h1",{id:"\u6570\u7EC4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6570\u7EC4","aria-hidden":"true"},"#"),s(" \u6570\u7EC4")],-1),u=n("h2",{id:"\u521B\u5EFA",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u521B\u5EFA","aria-hidden":"true"},"#"),s(" \u521B\u5EFA")],-1),k=s("\u4F7F\u7528\u6570\u7EC4\u5B57\u9762\u91CF\u8BED\u6CD5\u3002 ESLint: "),m={href:"https://eslint.org/docs/rules/no-array-constructor.html",target:"_blank",rel:"noopener noreferrer"},v=s("no-array-constructor"),b=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u62F7\u8D1D" aria-hidden="true">#</a> \u62F7\u8D1D</h2>`,2),h=s("\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u505A\u6570\u7EC4\u6D45\u62F7\u8D1D "),_=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> len <span class="token operator">=</span> items<span class="token punctuation">.</span>length
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> i

<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  itemsCopy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> items<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> itemsCopy <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u6362" aria-hidden="true">#</a> \u8F6C\u6362</h2><p>\u7528 <code>Array.from</code> \u5C06\u4E00\u4E2A\u7C7B\u6570\u7EC4\u5BF9\u8C61\u8F6C\u6210\u4E00\u4E2A\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arrLike <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrLike<span class="token punctuation">)</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrLike<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(y,f){const o=e("ExternalLinkIcon"),p=e("Badge");return i(),r("div",null,[d,u,n("p",null,[k,n("a",m,[v,a(o)])]),b,n("p",null,[h,a(p,{text:"\u63A8\u8350",type:"warning"})]),_])}var w=c(l,[["render",g],["__file","03-\u6570\u7EC4.html.vue"]]);export{w as default};
