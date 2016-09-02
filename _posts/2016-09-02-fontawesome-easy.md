---
layout: post
title:  "fontAwesome easy"
subtitle:  "The easy way to use fontAwesome"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   2016-09-02 16:00:00 +0100
categories: webdev
tags: fontAwesome css icons fonts
---
Personally I really like [FontAwesome](http://fontawesome.io/): it is really helpful! The canonical method, according to the [official documentation](http://fontawesome.io/examples/), is this:

1. {:#point-one}link the [CDN](https://cdnjs.com/libraries/font-awesome) or the file in you asset as a css library link
2. use inside the html the `i` tag:

```
<i>fa fa-something-code</i>
```

and it is done!

But ...

What if you have a lot icons to insert inside your project? Could be boring to death using over and over again the`i`tag inside the`html`! For this reason I love to use this *"easy way"*:

- do the same as the step [number one](#step-one)
- insert in your`body tag`the code below (you may use a different font inside each class):

```
font-family: 'your-favourite-font', fontAwesome, sans-serif;
```

- use the **cheatsheet code** with format`&#xf015;`needed that you can get from [ cheatsheet code list](http://fontawesome.io/cheatsheet/). Add in your html and you will get the same result.

For example if I have to add some icons to my menu I can do that in my html:

```
<div class="nav simple-way">
  <ul>
    <li>&#xf015; Home</li>
    <li>&#xf007; About me</li>
    <li>&#xf040; Contact me</li>
  </ul>
</div>
```

and I only need the previous code inside my css:

```
font-family: 'you-favourite-font', fontAwesome, sans-serif;
```
And is done as you can see in my following pen:

<p data-height="300" data-theme-id="24562" data-slug-hash="yaLjLo" data-default-tab="result" data-user="huckbit" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/huckbit/pen/yaLjLo/">An easy way to use fontAwesome</a> by Massimiliano Ranauro (<a href="http://codepen.io/huckbit">@huckbit</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

isn't it really cool?

Do you like this methodology or you have some other tip to share?
