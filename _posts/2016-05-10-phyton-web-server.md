---
layout: post
title:  "Phython web server"
subtitle:  "Web server on the fly"
date:   2016-05-10 19:00:00 +0100
categories: osx
---
If you are on linux / OsX or inside a phyton environment you can start a web server on the fly inside your project simply recalling an alias from the terminal in your project folder.

You have to edit your bash profile and add the following line:

{% highlight ruby %}
alias server='open http://localhost:8000 && python -m SimpleHTTPServer'
{% endhighlight %}

This feature is very useful when you are working in local host with a browser that disables the `origin load` by default (i.e. Chrome).

inserted the alias inside the `.bash_profile`, refresh with the following command:

{% highlight ruby %}
$ source ~/.bash_profile
{% endhighlight %}

inside your project folder you just type `$ server` to open your web server.
