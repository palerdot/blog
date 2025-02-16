---
author: Arun Kumar
pubDatetime: 2024-02-16T15:14:00Z
modDatetime: 2024-02-16T15:14:00Z
title: react-d3-speedometer v3 released
slug: react-d3-speedometer-v3
featured: true
draft: true
tags:
  - general
  - programming
  - open source
description: v3 released with React 19/Next 15 support
---

### `react-d3-speedometer` `v3` released!

[react-d3-speedometer v3](https://github.com/palerdot/react-d3-speedometer) released which is compatible with `React 19`/`Next 15`.

![react-d3-speedometer](https://raw.githubusercontent.com/palerdot/react-d3-speedometer/refs/heads/master/speedo.gif)

It has been 8+ years since the first release, and it has been quite a journey. It is interesting thing that `react-d3-speedometer` has
no breaking changes in the past 8 years. Part of the credit has to go to the React team for keeping the api consistent. This has
enabled the library to stay consistent without any breaking api changes for React 16, 17, 18 and now 19.

Around React 17, the library was rewritten completely from scratch with core split from rendering logic. This has enabled the core
to power other libraries like [vue-speedometer](https://github.com/palerdot/vue-speedometer) and [svelte-speedometer](https://github.com/palerdot/svelte-speedometer).

I would like to keep the library compatible with all the major versions and the focus is now on maintanence. It is for this reason, I'm not
taking feature requests that serve a tiny percentage of consumers. I mostly consider this library feature complete as it has features
required by ~95% of the consumers.

I might publish the core as a separate package so that we can decouple core from `react-d3-speedometer` repo. This might also enable
ports to other frameworks like [SolidJS](https://www.solidjs.com/) and [Angular](https://angular.dev/).

I'm proud of my work with this library, mostly because without any disruptions the library was used across major React versions.

Let us see what the future holds for this library.

Have a nice day!
