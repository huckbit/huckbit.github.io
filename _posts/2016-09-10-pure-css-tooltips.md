---
layout: post
title:  "CSS Tooltips"
subtitle:  "Pure CSS Tooltips nojs"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   YYYY-MM-DD 00:00:00 +0100
categories: webdev
tags: data-attribute css tooltip
---
A lot of web sites use JavaScript to create *tooltip* but is actually **easier with CSS**.

### Inside span elements:

It's a quick and simple process: use`data-tooltip`, for example in *span* elements, or where you want in your HTML code. To show the content put `content` property equal to `attr()`inside the pseudo element and style as you like.

```
<p> This is a text with a <span class="tooltip" data-tooltip="The HTML span element is a generic inline container">span</span> element inside a paragraph</p>
```

```
.tooltip:hover::after {
  content: attr(data-tooltip);
  /*style as you like*/
}
```

### Inside a link as well:

Insert`data-tooltip`inside the link and use the same style used for the span or other HTML elements.

You can try the tooltip with the interactive example down below:

<p data-height="300" data-theme-id="24562" data-slug-hash="VjAmoQ" data-default-tab="result" data-user="huckbit" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/huckbit/pen/VjAmoQ/">Pure CSS Tooltips</a> by Massimiliano Ranauro (<a href="http://codepen.io/huckbit">@huckbit</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
Do you usually use *tooltips* inside your web site? Let me know, leave a comment on this post.

You can see the same post inside [Codepen posts](http://codepen.io/huckbit/post/pure-css-tooltips) too.
