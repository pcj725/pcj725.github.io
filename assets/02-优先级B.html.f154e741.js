import{_ as n,o as s,c as a,e}from"./app.a23ae05c.js";const t={},p=e(`<h1 id="\u4F18\u5148\u7EA7b\u7684\u89C4\u5219-\u5F3A\u70C8\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7b\u7684\u89C4\u5219-\u5F3A\u70C8\u63A8\u8350" aria-hidden="true">#</a> \u4F18\u5148\u7EA7B\u7684\u89C4\u5219\uFF1A\u5F3A\u70C8\u63A8\u8350</h1><h2 id="\u7EC4\u4EF6\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6587\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6\u6587\u4EF6</h2><p>\u53EA\u8981\u6709\u80FD\u591F\u62FC\u63A5\u6587\u4EF6\u7684\u6784\u5EFA\u7CFB\u7EDF\uFF0C\u5C31\u628A\u6BCF\u4E2A\u7EC4\u4EF6\u5355\u72EC\u5206\u6210\u6587\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;TodoList&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;TodoItem&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// good</span>
components<span class="token operator">/</span>
<span class="token operator">|</span><span class="token operator">-</span> TodoList<span class="token punctuation">.</span>vue
<span class="token operator">|</span><span class="token operator">-</span> TodoItem<span class="token punctuation">.</span>vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5355\u6587\u4EF6\u7EC4\u4EF6\u6587\u4EF6\u7684\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#\u5355\u6587\u4EF6\u7EC4\u4EF6\u6587\u4EF6\u7684\u5927\u5C0F\u5199" aria-hidden="true">#</a> \u5355\u6587\u4EF6\u7EC4\u4EF6\u6587\u4EF6\u7684\u5927\u5C0F\u5199</h2><p>\u5355\u6587\u4EF6\u7EC4\u4EF6\u7684\u6587\u4EF6\u540D\u5E94\u8BE5\u8981\u4E48\u59CB\u7EC8\u662F\u5355\u8BCD\u5927\u5199\u5F00\u5934 (PascalCase)\uFF0C\u8981\u4E48\u59CB\u7EC8\u662F\u6A2A\u7EBF\u8FDE\u63A5 (kebab-case)\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
components<span class="token operator">/</span>
<span class="token operator">|</span><span class="token operator">-</span> mycomponent<span class="token punctuation">.</span>vue

components<span class="token operator">/</span>
<span class="token operator">|</span><span class="token operator">-</span> myComponent<span class="token punctuation">.</span>vue

<span class="token comment">// good</span>
components<span class="token operator">/</span>
<span class="token operator">|</span><span class="token operator">-</span> MyComponent<span class="token punctuation">.</span>vue

components<span class="token operator">/</span>
<span class="token operator">|</span><span class="token operator">-</span> my<span class="token operator">-</span>component<span class="token punctuation">.</span>vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u7840\u7EC4\u4EF6\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7EC4\u4EF6\u540D\u79F0" aria-hidden="true">#</a> \u57FA\u7840\u7EC4\u4EF6\u540D\u79F0</h2><p>\u5E94\u7528\u7279\u5B9A\u6837\u5F0F\u548C\u7EA6\u5B9A\u7684\u57FA\u7840\u7EC4\u4EF6 (\u4E5F\u5C31\u662F\u5C55\u793A\u7C7B\u7684\u3001\u65E0\u903B\u8F91\u7684\u6216\u65E0\u72B6\u6001\u7684\u7EC4\u4EF6) \u5E94\u8BE5\u5168\u90E8\u4EE5\u4E00\u4E2A\u7279\u5B9A\u7684\u524D\u7F00\u5F00\u5934\uFF0C\u6BD4\u5982 <code>Base</code>\u3001<code>App</code> \u6216 <code>V</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
components<span class="token operator">/</span>
<span class="token operator">|</span><span class="token operator">-</span> MyButton<span class="token punctuation">.</span>vue
<span class="token operator">|</span><span class="token operator">-</span> VueTable<span class="token punctuation">.</span>vue
<span class="token operator">|</span><span class="token operator">-</span> Icon<span class="token punctuation">.</span>vue

<span class="token comment">// good</span>
components<span class="token operator">/</span>
<span class="token operator">|</span><span class="token operator">-</span> BaseButton<span class="token punctuation">.</span>vue
<span class="token operator">|</span><span class="token operator">-</span> BaseTable<span class="token punctuation">.</span>vue
<span class="token operator">|</span><span class="token operator">-</span> BaseIcon<span class="token punctuation">.</span>vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5355\u4F8B\u7EC4\u4EF6\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u7EC4\u4EF6\u540D\u79F0" aria-hidden="true">#</a> \u5355\u4F8B\u7EC4\u4EF6\u540D\u79F0</h2><p>\u53EA\u5E94\u8BE5\u62E5\u6709\u5355\u4E2A\u6D3B\u8DC3\u5B9E\u4F8B\u7684\u7EC4\u4EF6\u5E94\u8BE5\u4EE5 <code>The</code> \u524D\u7F00\u547D\u540D\uFF0C\u4EE5\u793A\u5176\u552F\u4E00\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// bad</span>
components<span class="token operator">/</span>
<span class="token operator">|</span><span class="token operator">-</span> Heading<span class="token punctuation">.</span>vue
<span class="token operator">|</span><span class="token operator">-</span> MySidebar<span class="token punctuation">.</span>vue

<span class="token comment">// good</span>
components<span class="token operator">/</span>
<span class="token operator">|</span><span class="token operator">-</span> TheHeading<span class="token punctuation">.</span>vue
<span class="token operator">|</span><span class="token operator">-</span> TheSidebar<span class="token punctuation">.</span>vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6A21\u677F\u4E2D\u7684\u7B80\u5355\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u4E2D\u7684\u7B80\u5355\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u6A21\u677F\u4E2D\u7684\u7B80\u5355\u8868\u8FBE\u5F0F</h2><p>\u7EC4\u4EF6\u6A21\u677F\u5E94\u8BE5\u53EA\u5305\u542B\u7B80\u5355\u7684\u8868\u8FBE\u5F0F\uFF0C\u590D\u6742\u7684\u8868\u8FBE\u5F0F\u5219\u5E94\u8BE5\u91CD\u6784\u4E3A\u8BA1\u7B97\u5C5E\u6027\u6216\u65B9\u6CD5\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- bad --&gt;</span>
{{
  fullName.split(&#39; &#39;).map((word) =&gt; {
    return word[0].toUpperCase() + word.slice(1)
  }).join(&#39; &#39;)
}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token comment">// \u590D\u6742\u8868\u8FBE\u5F0F\u5DF2\u7ECF\u8F6C\u4E3A\u4E86\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">normalizedFullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fullName<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">word</span> <span class="token operator">=&gt;</span> word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> word<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6307\u4EE4\u7F29\u5199" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u7F29\u5199" aria-hidden="true">#</a> \u6307\u4EE4\u7F29\u5199</h2><p>\u6307\u4EE4\u7F29\u5199 (\u7528 <code>:</code> \u8868\u793A <code>v-bind:</code>\uFF0C<code>@</code> \u8868\u793A <code>v-on:</code> \u548C\u7528 <code>#</code> \u8868\u793A <code>v-slot</code>) \u5E94\u8BE5\u8981\u4E48\u59CB\u7EC8\u4F7F\u7528\uFF0C\u8981\u4E48\u59CB\u7EC8\u4E0D\u4F7F\u7528\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- bad --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
  <span class="token attr-name"><span class="token namespace">v-bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>newTodoText<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>newTodoInstructions<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- good --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>newTodoText<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>newTodoInstructions<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","02-\u4F18\u5148\u7EA7B.html.vue"]]);export{r as default};
