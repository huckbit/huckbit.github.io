---
layout: post
title:  "Check your ssh key passphrase"
subtitle:  "check your private key"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   2018-08-16 18:00:00 +0000
categories:
tags: [ubuntu, linux, ssh]
---

How can we check the  private key passphrase?

Use the following command:

```bash
ssk-keygen -y 
```

- If the input is the correct passphrase, the system will show you the related public key.
- for the wrong passphrase, you'll receive load failed.
- If the key has no passphrase, the system won't ask you for a passphrase and will immediately show you the associated public key.
