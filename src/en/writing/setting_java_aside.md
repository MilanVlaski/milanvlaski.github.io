---
title: Why I'm Setting Java Aside
---
## Why I liked Java at first

> Because making an object, putting a dot after it, and getting a dropdown with a list of methods of that object is *beautiful*.

In the University of East Sarajevo, we started off with C#. The C# curriculum heavily taught us about properties, and getters and setters, a topic which is was done to death, that there exist <a href="https://www.youtube.com/watch?v=6wVmqY-CrGM" target="_blank">tutorials</a> to explain why we need them. A concept that's wrong. These getters and setters only serve to pollute the dropdown, with useless information.

When we were taught Java, it was a bit different. Properties don't exist! So you're free to name your methods however you like. So, I write a class, give it a method, instantiate the class and bam! I've got the method, right there! I don't have to remember it's name, just make an instance.

This idea is what makes statically typed, object oriented languages so powerful, and widely adopted. You sort of write the classes, and when using them, just fill in the blanks, no need to remember any method names!

With getters and setters, you have to mentally ignore the getters and setters from the dropdown. And then you can use your beautiful methods.

## Assembling your app in the main method.

This means people can't learn what dependency injection actually is - something totally trivial, but quite useful.

```java
new App(
	new CrowdObserver();
).start();
```

Instead... annotations. Of course.
## Annotations
Annotations are bad in that they don't allow you to construct your program from classes/objects. In practice, we're mostly forced to use Annotations by JPA and Spring Boot. Why annotations are universally accepted is a mystery to me.

## JPA

Mapping tables to objects is not that hard, and using SQL to do grouping, sorting and selecting is easier than doing it in application code.

Also, if you use JPA, you still need to handle migrations. And migrations need SQL. 
# Writing simple code in Java is easy
> But nobody does it.

Actually, Java is a perfectly non-verbose language. If you excuse the fact that it's class based.

## Which programming language is next?
So, yeah, instead of fighting against the tide, let's just use a good language, with a more reasonable ecosystem?

**Ruby**  - No Ruby sadly suffers from the same problem. It's actually leagues more expressive than Java, as a language, but suffers from the same framework crap, and ORM obfuscation. It doesn't use annotations, but it uses magic which is... maybe worse? Annotations are at least explicit. They carry an import dependency with them.

**Python** might be the best for me?

**Elixir** might be the way. It's got a good foundation. It's specific for certain use cases.

**Javascipt** - For a language that's more pure than Java. And much more powerful, since the whole web runs on it. To this day. *To this day.*

If you want purity, and this is nothing new, it's Lisp. But the idea of making something commercial with Lisp sounds unrealistic.

<a href="https://youtube.com/watch?v=lsyZj6LBvVA" target="_blank">A Better Criticism of Spring</a>

## Conclusion
I believe that a programming language with a good "ecosystem" doesn't exist, as in every language ecosystem, there is a small number of programmers writing minimal, functional code. Therefore, it's a waste of time to learn a new language with the hopes of finding people who write code sanely. Instead, I'll focus on freelancing for now, and try to find people that share my coding interests, taste and style.
