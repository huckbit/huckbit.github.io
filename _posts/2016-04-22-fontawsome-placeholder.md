---
layout: post
title:  "FontAwsome and placeholders"
subtitle:  "Fontawesome icons inside a palaceholder"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   2016-04-22 14:00:00 +0100
categories: webdev
tags: fontAwesome css input font
---
This is one way to use fontAwesome icons inside a palaceholder.

In the CSS you have to use this code for the class fontAwesome:

```
.fontAwesome {
font-family: 'Helvetica', FontAwesome, sans-serif;
}
```

After that in the HTML you have to add the **fontawesome class** first and then the **fontawesome icon code** inside the placeholder:

```
<input class="fontAwesome" name="emailAddress" type="text" placeholder="[insert-fa-code-here;] insert email address ..." />
```
and it’s done!!!

You can simply apply the class every time inside your input with the relative code in the placeholder.

And even more, you can use this method by entering the code into a generic element such as a link or a simple text using the same class “fontAwesome” used for the placeholder:

```
<a class="fontAwesome" href="#">[insert-fa-code-here;] Great job!!!</a>
```

You can see the result or read the post from my [codePen](http://codepen.io/huckbit/post/fontawesomeplaceholder) post.

<p data-height="300" data-theme-id="24562" data-slug-hash="rezezb" data-default-tab="result" data-user="huckbit" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/huckbit/pen/rezezb/">FontAwesome and placeholders</a> by Massimiliano Ranauro (<a href="http://codepen.io/huckbit">@huckbit</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
