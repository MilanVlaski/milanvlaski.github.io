---
title: Software craftsmanship relies too much on English
---

A lot of software acts as infrastructure. Pipes that carry shit, water or shitty water. Software craftsmanship is an attempt to move software towards art. We understand that a craftsman may not be an artist. But we believe that a *good one*, is.

And if there's an art that code can attempt to emulate, it's prose. In order to write good prose, one needs to know the language they're writing in very well. And this is where the issue lies.

English is the language of programming.

Programming language keywords, like `class`, `public`, `function` or `if`, are all in English. The literature and the documentation are in English.

## Non-English-speaking programmers

So, good code is good prose, and good prose requires knowing the language. At least, having a broad vocabulary. If this is lacking, but one tries to be a software craftsman, they'll copy the patterns that they see. The result of that is illustrated in the insane coding practices of the "enterprise backend" world, where every feature of the app must have a Controller -> Service -> Repository -> Entity path. A so called best practice. Dumbed down, and replicated. By people, and of course, by LLMs.

## The pragmatic and elegant conclusion

As I said at the start — most software is infrastructure. Or should act as infrastructure. It doesn't have to be expressive. Attempts to make enterprise backends expressive have simply made the code more verbose.

If we truly wish to make coding more elegant, while keeping it accessible, let's keep the middleware thin, and stick to gluing together protocols, which in web dev are: HTML, CSS, JS (the parts you read on MDN), HTTP and SQL. The glue part, parts of which are business logic, can and should be written expressively. But there should be less of it. More people will understand it, and we won't have to invent a thousand new concepts every year that an LLM, or badly paid human, will be happy to learn.

*Another one of my rants on software craftsmanship*
[here]({{"/writing/engineering_vs_craftsmanship" | locale_url}}).

PS: I find it important to state that lack of English skills is not a barrier to craftsmanship. But no reading books — is.
