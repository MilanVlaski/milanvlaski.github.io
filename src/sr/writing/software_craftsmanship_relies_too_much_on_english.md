---
title: Softver majstorstvo se previše oslanja na Engleski jezik
---

Većina softvera je kao infrastruktura. Cijevi kojima teku govna, voda ili govnasta voda. Softversko majstorstvo (software craftsmanship) je pokušaj da usmjerimo softver ka umjetnosti. Svi razumijemo da zanatlija ili majstor ne moraju biti umjetnici. Ali vjerujemo da oni koji su *dobri*, jesu.

Ako kod i može biti neka umjetnost, onda je to sigurno proza. Da bi se pisala dobra proza, potrebno je razumjeti jezik kojim se piše. I tu leži problem.

Engleski je jezik programiranja.

Riječi u programskim jezicima, kao `class`, `public`, `function` ili `if`, sve su na Engleskom. I literatura i dokumentacija su na Engleskom.


## Programeri koji ne znaju Engleski

Dakle dobar kod je dobra proza, i dobra proza zahtijeva znanje jezika, ili makar, zahtjeva bogat rječnik. Ako ovo fali nekome ko želi biti softverski majstor, oni će kopirati šablone koje vide. A rezultat su sulude prakse "enterprajz bekend" svijeta, gdje svaka funkcionalnost aplikacije mora imati svoj Controller -> Service -> Repository -> Entity put. Takozvana najbolja praksa. Pojednostavljena, i iskopirana, a kopiraju je i ljudi, i LLM-ovi (large language modeli).

## Pragmatičan i elegantan zaključak

Kao što rekoh na početku — većina softvera je infrastruktura. Ili bi trebao biti infrastruktura. Ne mora on biti ekspresivan. Pokušaji da se učini ekspresivnim su samo učinili kod rječitijim.

Ako stvarno hoćemo da kodiranje bude elegantnije, a da ostane pristupačno ljudima, neka "middleware" bude tanak, i neka lijepimo zajedno protokole, koji su u web razvoju: HTML, CSS, JS (dijelovi koje čitate sa MDN-a), HTTP i SQL. Taj midlver treba biti što ekspresivniji. Mada i ne mora. Ali ga treba biti malo. Tad nam neće trebati 1000 novih koncepata svake godine, koje će LLM, ili loše plaćena osoba, rado da uči.

*Another one of my rants on software craftsmanship*
[here]({{"/writing/engineering_vs_craftsmanship" | locale_url}}).
