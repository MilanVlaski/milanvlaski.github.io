---
title: Vanilla JS Daje Pravi Arhitektonsku Slobodu
---
(Objava prevedena na Srpski korištenjem vještačke inteligencije)

Vanilla Javascript omogućava besprekornu arhitektonsku tranziciju između različitih paradigmi, po želji.

U redosledu kompleksnosti:
- deklarativno (nema js)
- imperativno (js skripte)
- deklarativno sa dodatnom moći (web komponente + js)
- reaktivno (web komponenta + novi Proxy(target, handler) )

Sada, virtual dom je kompleksna karakteristika React-a. Ali Lichess je izgrađen sa virtual dom bibliotekom zvanom <a href="https://github.com/snabbdom/snabbdom" target="_blank">"snabbdom"</a>.

Poenta je da frameworci nas odvajaju od učenja šta je zaista moguće.
