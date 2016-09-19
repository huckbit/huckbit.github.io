---
layout: post
title:  "Phython web server"
subtitle:  "Web server on the fly"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   2016-05-10 19:00:00 +0100
categories: osx
tags: [osx, phyton]
---
If you are on linux / OSX or inside a phyton environment you can start a web server on the fly simply recalling an alias from the terminal in your project folder.

Edit your bash profile and add the following line:

```
alias server='open http://localhost:8000 && python -m SimpleHTTPServer'
```

This feature is very useful when you are working in local host with a browser that disables by default the `origin load` (i.e. Chrome).

after inserted the alias inside the`.bash_profile`, refresh with the following command

```
source ~/.bash_profile
```
or restart you terminal. Now in the path of your project type`server`to open the web server.

Did you find useful this methodology for your webdev projects?
