---
title: Vanilla JS Gives True Architectural Freedom
---

Vanilla Javascript allows seamless architectural transitioning from different paradigms, at will.

In order of complexity:
- declarative (no js)
- imperative (js scripts)
- declarative with extra power (web components + js)
- reactive (web component + new Proxy(target, handler) )

Now, a virtual dom is a complex feature of React. But Lichess is built with a virtual dom library called ["snabbdom"](https://github.com/snabbdom/snabbdom).

The point is, frameworks are gatekeeping us from learning about what's actually possible.