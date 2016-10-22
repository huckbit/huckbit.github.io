---
layout: post
title:  "Components Angular2 RC6"
subtitle:  "directives properties are deprecated"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   2016-10-20 00:00:00 +0100
categories:
tags: [Angular2, AngularRC6, NgModule, directives]
---
In Angular2 before the [new version](http://angularjs.blogspot.it/2016/09/angular-2-rc6_1.html), released on September 2016, to add a new component we used:

```
directives : [NameComponent]
```

inside `@component`.

Now, **directives properties** from **Angular2** version **RC6** are **deprecated**, and we are going to use [NgModule declarations](https://angular.io/docs/ts/latest/api/core/index/NgModule-interface.html) instead of `directives`.

To better understand we are going to start from the official [QuickStart](https://angular.io/docs/ts/latest/quickstart.html) @ [Angular.io](https://angular.io/):

1. Clone the official [Angular.io](https://angular.io/) repo from [github](https://github.com/angular/quickstart/blob/master/README.md).
2. install with `npm install`
3. start the server with `npm start`

Now let's **create our new component**, I called mine `new.component.ts` and this is what inside:

```
import { Component } from '@angular/core';

@Component({
    selector: 'new-component',
    template: `<h1></h1>`
})

export class NewComponent {
    title = "this is the new component"
}
```

Now, in `app.component.ts` ,change in the template the quotes with [back-ticks](http://quotesandaccents.com/) to have multiple line and add:

```
<new-component>Loading new component ...</new-component>
```

This is my final `app.component.ts`:

```
import { Component }  from '@angular/core';
import { NewComponent } from './new.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular App</h1>
    <new-component>Loading new component ...</new-component>
    `
})
export class AppComponent { }
```

Now add to `app.module.ts`, after the component’s import:

```
import { NewComponent } from './new.component'
```

Then in the NgModule in `declarations` add the new component `NewComponent`.

This is my final `app.module.ts`:

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NewComponent } from './new.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    NewComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

Now you can see the new component inside the page.

Watch the following video to see how to create a new component step by step.

[![Video-of-new-component](https://gitlab.com/huckbit/blog-images/raw/master/images/VideoComponentAngular.jpg)](https://youtu.be/hj_lIDl4AtQ){: .image--center .video}
