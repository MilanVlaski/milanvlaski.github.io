---
title: Software Engineering Versus Software Crafstmanship
---

Let's consider software programming as engineering, or as crafstmanship, or art. I believe that what we're seeing with LLMs basically accelerating the software engineering side. First, let's define what software engineering is. So software engineering is *basically* taking something that's already known from science or experience or best practice, and just applying it to the problem at hand. In 90% of cases, it's more "best practice" than actual science, but in principle, that's what engineering is.

If it's taken to the extreme, it produces extremely boring and always complicated code. Always more complicated than it needs to be because it's not built from low level components, into a minimalist sort of codebase and solution. 

It follows a process of, oh, you have security, okay, you should use this library. And if you have, um, I don't know, a backend, you should use this framework, et cetera. And if you have a front end, you should use this. And it sounds like solid advice, but it's, it's never minimalist. It's perfectly fine, but it's extremely boring and and difficult for humans to necessarily understand, because of the sheer size and conceptual bloating, because every framework or "big library", uses concepts which you have to know. Of course, in theory, they're easy to pick up, because the concepts repeat, etc, but if there are no extra concepts, then there is nothing new to learn! That's less cognitive effort!

It's the same type of effort that goes into justifying the purchase of something we can't afford. It's useless, against the raw logic of: 0$ dollars spent, plus learning something new, always pays off, and is "recession proof".

That's where LLMs come in. So for me, a lot of my experience with AI written code is just like with human code, is just

> This is not even worth reading. I would rather just make it.

And a lot of the time, but not always, it's because I can sense that the author of the code, a person or AI, was infected with some way of thinking about code that I don't agree with. The main culprit being Java. See [Why I'm setting Java aside]({{ "/writing/setting_java_aside" | locale_url }}).
# A better process
I would define a contrary process, where, we take all of the little bits raw bits of data that need to be processed in a software system, and we figure out the most simple solution to do that. Which usually involves simple protocols and existing solutions, such as, Linux, Bash, SQL, HTML, CSS, etc. This allows us to tailor our solutions, so we get much fewer lines of code.

However, this ends up being less understandable to others. It is by definition, less understandable, because today, if you don't use frameworks, nobody knows, for example, how vanilla JavaScript works. If you know how to use web components you might notice that they can make your frontend frameworks obsolete.
# The web as embodying this philosophy

What makes the web in combination with the browser, super powerful is that it's a text based GUI. You can fiddle with the HTML/CSS however you like, and end up with a functional set of UI widgets. I don't know enough about software history to say that this is unheard of, but the fact that we see so many "build tools" for the frontend, speaks to the fact that people don't care about the magic of the web. It's reminiscent of the Unix philosophy, saying that "text is the universal interface". Indeed, inded. Do you know that you can use bash scripts as a build tool for a static site generator? It's how I made my blog website, after failing to vibe code it with Jekyll.
# Back to engineering
But,  it's not like doing software engineering means that, oh, you, you know, we should build 100% of everything from scratch. I just think that more craftsmanship is more fun. And if it's possible to get paid for more fun, then I want to do it. It's not really about anything else. I got into programming 'cause I wanted to live off of it, but then I found out that what software engineering is, and I saw the end goal of software engineering is to kind of just have this repository of best practices and to always use them. And, which is very boring. Um, and I'm, I'm not, I try not to be a boring person. I try to be creative and clever, so it's not about engineering is bad, craftsmanship is good. You need both. And every software engineer is a bit of a craftsman.

Uh, it's just that personally I want to be a craftsman. I want to make software and I wanna show it to people. And I want those people to be like, wow, this is cool. Rather than, um,nn sort of have a job. Oh, have a job where basically. This craftsman's side is not acknowledged. It's more on the engineering side, but we all know that.

For a programmer to, to do things, to be good, to be paid well, to be an expert, they must be a craftsman, at least in their spare time. And a lot of programmers program in their spare time, it's deep in our culture.

There many, many, many, many programmers are craftsmen on the side, and they have to be, because you can't get that craftsmanship out of programming. You always have to. You always have to connect it somehow. That's the human factor. That's the factor that doesn't let AI just do it all for us, because only **we** can connect the software "bits", and make sense of them.

I take a quote from Baki, the grappler:

> The one that works hard, can never defeat the one that enjoys himself.