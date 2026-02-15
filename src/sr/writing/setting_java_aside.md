---
title: Zašto ostavljam Javu za sad
---
(Ovaj sadržaj preveden na Srpski korištenjem vještačke inteligencije)

 Zašto sam na početku volio Javu:

> Jer pravljenje objekta, stavljanje tačke posle njega, i dobijanje padajućeg menija sa listom metoda tog objekta je *prekrasno*.

Na Univerzitetu u Istočnom Sarajevu, započeli smo sa C#. C# kurikulum nas je dobro podučio o properties, i gettersima i setterima, temu koja je bila ubijena do smrti, da postoje <a href="https://www.youtube.com/watch?v=6wVmqY-CrGM" target="_blank">tutoriali</a> da objasne zašto nam trebaju. Koncept koji je pogrešan. Ovi gettersi i setteri samo služe da zagadite padajući meni, beskorisnim informacijama.

Kada nas su naučili Javi, bilo je malo drugačije. Properties ne postoje! Dakle, slobodni ste da vaše metode imenujete kako god želite. Dakle, ja napišem klasu, dam joj metod, instanciram klasu i bum! Imam metodu, baš tu! Ne treba mi da se sećam njenog imena, samo napravim instancu.

Ova ideja je ono što čini statički tipizirane, objektno orijentisane jezike tako moćnim, i široko primenjenim. Više-oseč pišete klase, i kada ih koristite, samo popunjavate praznine, ne treba da se sećate imena metoda!

Sa gettersima i setterima, morate mentalno da ignorišete getterse i setterise iz padajućeg menija. I onda možete da koristite svoje prelepem metode.

## Sastavljanje vaše aplikacije u main metodu.

To znači da ljudi ne mogu naučiti šta je dependency injection zaista - nešto totalno triviajno, ali prilično korisno.

```java
new App(
	new CrowdObserver();
).start();
```

 Umjesto... anotacije. Naravno.

## Anotacije

Anotacije su loše u tome što vam ne dozvoljavaju da konstruišete vaš program od klasa/objekata. U praksi, uglavnom smo prisiljeni da koristimo Anotacije zbog JPA i Spring Boot-a. Zašto su anotacije univerzalno prihvaćene je za mene misterija.

## JPA

Mapiranje tabela na objekte nije toliko teško, i korišćenje SQL-a za grupisanje, sortiranje i selekciju je lakše nego urađivanje toga u aplikacionom kodu.

Takođe, ako koristiš JPA, ti i dalje trebaš da upravljaš migracijama. I migracije trebaju SQL.

# Pisanje jednostavnog koda u Javi je lako

> Ali niko to ne radi.

Zapravo, Java savršeno nije verbose jezik. Ako zanemarimo činjenicu da je klasa-based.

## Koji programski jezik je sledeći?

Dakle, da, umesto da se borimo protiv vala, idemo da koristimo dobar jezik, sa razumnijim ekosistemom?

**Ruby** - Ne, Ruby nažalost pati od istog problema. Zapravo je mnogo izražajniji od Jave, kao jezik, ali pati od istog framework crap-a, i ORM zamućenja. Ne koristi anotacije, ali koristi magiju što je... možda gore? Anotacije su bar explicite. One nose import dependency sa sobom.

**Python** bi mogao biti najbolji za mene?

**Elixir** bi mogao biti put. Ima dobro osnov. Specifičan je za određene use case-ove.

**Javascript** - Za jezik koji je čistiji od Jave. I mnogo moćniji, pošto ceo web na njemu trči. Do dana današnjeg. *Do dana današnjeg.*

Ako želiš čistocu, i to nije ništa novo, to je Lisp. Ali ideja da napraviš nešto komercijalno sa Lisponom zvuči nerealno.

<a href="https://youtube.com/watch?v=lsyZj6LBvVA" target="_blank">Bolja Kritika Spring-a</a>

## Zaključak

Verujem da programski jezik sa "dobrim ekosistemom" ne postoji, kao što u svakom jeziku ekosistemu, postoji mali broj programera koji pisu minimalist, funkcionalan kod. Stoga, gubljenje vremena da se nauči novi jezik u nadi da ćeš naći ljude koji pisu zdravo, je beskorisno. Umesto toga, fokusiraću se na freelancing za sada, i pokušaću da nađem ljude koji dele moje programerske interese, ukus i stil.
