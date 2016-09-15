---
layout: post
title:  "Bash style"
subtitle:  "Customise your bash"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   2016-04-26 18:00:00 +0100
category: osx
tags: [osx, style, bash]
---
If you are using OSX this is wonderful because you can customise your command line by adding emoji icons to the bash prompt.

You can find icons inside your Edit menu: `Edit -> Emoji & Symbols`.

How to add custom icons to our bash?

So edit your `.bash_profile` with your favorite editor vim or nano for example, and add this line:

```
PS1=" "
```

Open **Emoji & Symbol** panel and drag and drop your favorite emoji inside quotation marks.

![drag and Drop](https://gitlab.com/huckbit/blog-images/raw/master/images/terminal-cust.gif){: .image--center}


Depending on terminal settings, nothing may be visible after using drag & drop. Close and reopen you terminal and voilà:
![my terminal](https://gitlab.com/huckbit/blog-images/raw/master/images/terminal-hb.png){: .image--center}

You can customise terminal bash with some others options:

| code   | description                             
|:-------|:----------------------------------------|
| \d     | Current date                             
| \t     | Current time                             
| \h     | Host name                                
| \#     | Command number                           
| \u     | User name                                
| \W     | Current working directory (ie: Desktop/)
| \w     | Current working directory with full path


This is my favourite customisation:

```
PS1="🌀  \u@\h\W$ "
```

What’s yours?
