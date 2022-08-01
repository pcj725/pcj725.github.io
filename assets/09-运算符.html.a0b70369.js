import{_ as t,o as p,c as l,a as n,b as e,d as s,e as o,r as c}from"./app.a23ae05c.js";const i={},r=n("h1",{id:"\u8FD0\u7B97\u7B26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8FD0\u7B97\u7B26","aria-hidden":"true"},"#"),s(" \u8FD0\u7B97\u7B26")],-1),d=n("h2",{id:"\u76F8\u7B49",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u76F8\u7B49","aria-hidden":"true"},"#"),s(" \u76F8\u7B49")],-1),u=s("\u7528 "),k=n("code",null,"===",-1),v=s(" \u548C "),m=n("code",null,"!==",-1),b=s(" \u800C\u4E0D\u662F "),_=n("code",null,"==",-1),h=s(" \u548C "),g=n("code",null,"!=",-1),f=s(". eslint: "),y={href:"https://eslint.org/docs/latest/rules/eqeqeq",target:"_blank",rel:"noopener noreferrer"},w=s("eqeqeq"),x=n("li",null,[n("p",null,"\u5E03\u5C14\u503C\u8981\u7528\u7F29\u5199\uFF0C\u800C\u5B57\u7B26\u4E32\u548C\u6570\u5B57\u8981\u660E\u786E\u4F7F\u7528\u6BD4\u8F83\u64CD\u4F5C\u7B26\u3002")],-1),j=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u5143\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5143\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u4E09\u5143\u8868\u8FBE\u5F0F</h2>`,2),q=s("\u4E09\u5143\u8868\u8FBE\u5F0F\u4E0D\u5E94\u8BE5\u5D4C\u5957\uFF0C\u901A\u5E38\u662F\u5355\u884C\u8868\u8FBE\u5F0F\u3002 eslint: "),N={href:"https://eslint.org/docs/latest/rules/no-nested-ternary",target:"_blank",rel:"noopener noreferrer"},V=s("no-nested-ternary"),z=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&quot;bar&quot;</span> <span class="token operator">:</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&quot;baz&quot;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> maybeNull <span class="token operator">=</span> value1 <span class="token operator">&gt;</span> value2 <span class="token operator">?</span> <span class="token string">&#39;baz&#39;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> maybe1 <span class="token operator">&gt;</span> maybe2 <span class="token operator">?</span> <span class="token string">&#39;bar&#39;</span> <span class="token operator">:</span> maybeNull<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),B={start:"2"},E=s("\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u4E09\u5143\u8868\u8FBE\u5F0F\u3002 eslint: "),I={href:"https://eslint.org/docs/latest/rules/no-unneeded-ternary",target:"_blank",rel:"noopener noreferrer"},L=s("no-unneeded-ternary"),C=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> c <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> a <span class="token operator">||</span> b<span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>c<span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token operator">!</span>c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u589E\u81EA\u51CF" tabindex="-1"><a class="header-anchor" href="#\u81EA\u589E\u81EA\u51CF" aria-hidden="true">#</a> \u81EA\u589E\u81EA\u51CF</h2>`,2),S=s("\u4E0D\u8981\u4F7F\u7528\u4E00\u5143\u81EA\u589E\u81EA\u51CF\u8FD0\u7B97\u7B26\uFF08++\uFF0C --\uFF09\u3002eslint: "),T={href:"https://eslint.org/docs/latest/rules/no-plusplus",target:"_blank",rel:"noopener noreferrer"},A=s("no-plusplus"),D=o(`<blockquote><p>\u4F7F\u7528 <code>num + = 1</code> \u800C\u4E0D\u662F <code>num ++</code> \u6216 <code>num ++</code> \u8BED\u53E5\u4E5F\u662F\u542B\u4E49\u6E05\u6670\u7684\u3002 \u7981\u6B62\u4E00\u5143\u589E\u91CF\u548C\u51CF\u91CF\u8BED\u53E5\u8FD8\u4F1A\u963B\u6B62\u60A8\u65E0\u610F\u5730\u9884\u589E/\u9884\u51CF\u503C\uFF0C\u8FD9\u4E5F\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u51FA\u73B0\u610F\u5916\u884C\u4E3A\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
num <span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token operator">--</span> num<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
num <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
num <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u5408\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u60C5\u51B5" aria-hidden="true">#</a> \u7EC4\u5408\u60C5\u51B5</h2>`,3),F=s("\u4E0D\u8981\u4F7F\u7528\u4E00\u5143\u81EA\u589E\u81EA\u51CF\u8FD0\u7B97\u7B26\uFF08++\uFF0C --\uFF09\u3002eslint: "),G={href:"https://eslint.org/docs/latest/rules/no-plusplus",target:"_blank",rel:"noopener noreferrer"},H=s("no-plusplus"),J=o(`<blockquote><p>\u4F7F\u7528 <code>num + = 1</code> \u800C\u4E0D\u662F <code>num ++</code> \u6216 <code>num ++</code> \u8BED\u53E5\u4E5F\u662F\u542B\u4E49\u6E05\u6670\u7684\u3002 \u7981\u6B62\u4E00\u5143\u589E\u91CF\u548C\u51CF\u91CF\u8BED\u53E5\u8FD8\u4F1A\u963B\u6B62\u60A8\u65E0\u610F\u5730\u9884\u589E/\u9884\u51CF\u503C\uFF0C\u8FD9\u4E5F\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u51FA\u73B0\u610F\u5916\u884C\u4E3A\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
num <span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token operator">--</span> num<span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
num <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
num <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function K(M,O){const a=c("ExternalLinkIcon");return p(),l("div",null,[r,d,n("ol",null,[n("li",null,[n("p",null,[u,k,v,m,b,_,h,g,f,n("a",y,[w,e(a)])])]),x]),j,n("ol",null,[n("li",null,[q,n("a",N,[V,e(a)])])]),z,n("ol",B,[n("li",null,[E,n("a",I,[L,e(a)])])]),C,n("p",null,[S,n("a",T,[A,e(a)])]),D,n("p",null,[F,n("a",G,[H,e(a)])]),J])}var Q=t(i,[["render",K],["__file","09-\u8FD0\u7B97\u7B26.html.vue"]]);export{Q as default};
