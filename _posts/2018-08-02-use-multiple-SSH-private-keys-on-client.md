---
layout: post
title:  "Use multiple SSH private keys on a client"
subtitle: "How to configure multiple ssh keys"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   2018-08-02 19:00:00 +0000
categories:
tags: [multiple-keys, private-key, public-key, rss, ssh, ssh-config]
---
To use multiple shh private keys on a client you need to create the file config inside the folder `.ssh` and use the following entries:

```
Host myshortname realname.example.com
HostName realname.example.com
IdentityFile ~/.ssh/realname_rsa
User remoteusername

Host myother realname2.example.org
HostName realname2.example.org
IdentityFile ~/.ssh/realname2_rsa
User remoteusername
```

where `IdentityFile` is the private key for realname.
