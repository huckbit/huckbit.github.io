---
layout: post
title:  "Wordpress updates in local environment"
subtitle:  "Install wordpress updates without ftp in a local environment"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   2018-04-04 14:00:00 +0100
categories:
tags: [wordpress, php, cms]
---
If you're using wordpress in a local environment and you want update the wordpress version without to enable ftp you can add to the wordpress config file `wp-config.php` with this setup:

```php
define('FS_METHOD', 'direct');
```

:warning: Note: you must have permission to write in the wordpress folder. Using LAMP server make sure you have the user in the same group of `www-data`.