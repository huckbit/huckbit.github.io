---
layout: post
title:  "Components Angular2 RC6"
subtitle:  "directives are deprecated in Angular2 RC6"
author:
  display_name: huckbit
  login: huckbit
  email: info@huckbit.com
  url: http://www.huckbit.com
date:   2016-10-20 00:00:00 +0100
categories:
tags: [Angular2]
---
In Angular2 before the [new version](http://angularjs.blogspot.it/2016/09/angular-2-rc6_1.html) released on September 2016 to add a new component we used:

```
  directives : [NameComponent]
```

but now in Angular2 version RC6 this is deprecated, and we have to use [ngModule declarations](https://angular.io/docs/ts/latest/api/core/index/NgModule-interface.html) instead.

To better understand start all from scratch we start form the [QuickStart](https://angular.io/docs/ts/latest/quickstart.html) inside the official site [Angular.io](https://angular.io/):

1. Clone the official Angular.io repo from [github](https://github.com/angular/quickstart/blob/master/README.md).

2. install with `npm install`

3. start the server with `npm start`

Now create our new component, I called mine `new.component.ts` and this is what I have inside it:

```
import { Component } from '@angular/core';

@Component({
    selector: 'new-component',
    template: `<h1>{{title}}</h1>`
})

export class NewComponent {
    title = "this is the new component"
}
```

Now inside `app.component.ts` change inside the template the quotes with [back-ticks](http://quotesandaccents.com/) to have multiple line and add:
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

Now add to `app.module.ts`

```
import { NewComponent } from './new.component'
```
after the Component’s import. Then inside NgModule in `declarations` add the new component `NewComponent` this is my `app.module.ts`:

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

Now you can see new component inside your page.
