---
title: Inženjerstvo versus Zanatlijanstvo
---

Razmotrimo programiranje kao inženjerstvo, ili kao zanatlijanstvo, ili umetnost. Verujem da ono što vidimo sa LLM-ima uzemljuje ubrzava inženjersku stranu. Prvo, definišimo šta je softversko inženjerstvo. Dakle, softversko inženjerstvo je *u osnovi* uzimanje nečeg što je već poznato iz nauke, iskustva ili najbolje prakse, i samo primena na problem naoružan. U 90% slučajeva, više je "najbolja praksa" nego stvarna nauka, ali u principu, to je inženjerstvo.

Ako se to vodi do ekstrema, proizvodi ekstremno dosadno i uvek komplikovano kodiranje. Uvek je složenije nego što treba biti jer ne gradi od niskog nivoa komponenti, u minimalistu sortu koda i rešenja.

Prati proces, ah, imaš bezbednost, dobro, treba da koristiš ovu biblioteku. Ako imaš, hm, ne znam, backend, treba da koristiš ovaj framework, itd. Ako imaš frontend, trebaš da koristiš ovo. Zvuči kao solidan savet, ali nikada nije minimalist. Savršeno je u redu, ali je ekstremno dosadno i teško pojmivo za ljude zbog ogromne veličine i konceptualnog puntanja, jer svaki framework ili "velika biblioteka", koristi koncepte koje moraš da znaš. Naravno, u teoriji, lako ih je uhvatiti, jer se koncepti ponavljaju, itd, ali ako nema dodatnih koncepta, onda nema ništa novo za naučiti! To je manje kognitivnog napora!

To je isti tip napora koji ide u opravdanje kupovine nečega što ne možemo da priuštimo. Beskorisno je, protiv surove logike: 0$ prodatih, plus naučiti nešto novo, uvek se isplati, i je "recesiono otporan".

Tu dolaze LLM-ovi. Dakle, za mene, puno mojih iskustava sa AI generisanim kodom je kao sa ljudskim kodom, samo je,

> Ovo čak i nije vredno čitanja. Radije bih ga napravio.

I često, ali ne uvek, to je zato što mogu osetiti da autor koda, osoba ili AI, je zaražen nekim načinom razmišljanja o kodu sa kojim se ne slažem. Glavni krivac biće Java. Vidi [Zašto odbacujem Javu]({{ "/writing/setting_java_aside" | locale_url }}).

# Bolji proces

Definišu suprotan proces, gde uzimamo sve male sirove delove podataka koji treba da se obrađuju u softverskom sistemu, i odredjujemo najjednostavnije rešenje da to uradimo. Što obično uključuje jednostavne protokole i postojeća rešenja, kao što su Linux, Bash, SQL, HTML, CSS, itd. To nam omogućava da prilagodimo rešenja, tako da dobijemo mnoogo manje linija koda.

Međutim, to postaje manje razumljivo drugima. Prema definiciji, manje je razumljivo, jer danas, ako ne koristiš framework-ove, nitko ne zna, na primer, kako vanilla JavaScript radi. Ako znaš kako se koriste web komponente, možda ćeš primetiti da one mogu da učine tvoj frontend framework nepotrebnim.

# Web kao osoba ove filozofije

Ono što čini web u kombinaciji sa browserom, super moćnim je to da je to tekstualno baziran GUI. Možete da igrate sa HTML/CSS kako god želite, i da se na kraju nađete sa funkcionalnim skupom UI widget-a. Ne znam dovoljno o softverskoj istoriji da kažem da je ovo nečuveno, ali činjenica da vidimo toliko "build alata" za frontend, govori da ljudi ne cene magiju weba. Sjeća na Unix filozofiju, koja kaže da je "tekst univerzalni interfejs". Zaista, zaista. Da li znaš da možeš da koristiš bash skripte kao build alat za static site generator? Tako sam napravio moj blog sajt, nakon neuspjeha da ga napravim sa Jekyllom.

# Nazad na inženjerstvo

Ali, nije kao da urađivanje softverskog inženjerstva znači da, oh, znaš, treba da izgradiš 100% svega od nule. Samo mislim da više zanatlijanstva je zabavnije. Ako je moguće da se plati za više zabave, onda hoću da to radim. To nije ništa drugo. Ušao sam u programiranje zato što sam želeo da živim od toga, ali sam onda otkrio šta je softversko inženjerstvo, i video da je krajnji cilj inženjerstva da ima repozitorijum najboljih praksi i da se uvek one koriste. I to je vrlo dosadno. I ja, ja, ja, pokušavam da ne budem dosadan čovek. Pokušavam da budem kreativan i pametan, tako da nije da je inženjerstvo loše, zanatlijanstvo dobro. Trebaš oboje. I svaki softverski inženjer je mali zanatlijan.

Pa, lično ja želim da budem zanatlijan. Želim da kreiram softver i želim da ga pokažem ljudima. I želim da ti ljudi budu kao, vau, ovo je kul. Radije nego, hm, da imam posao gde se ovaj zanatlijanski aspekt ne priznaje. Više je na inženjerskoj strani, ali svi znamo to.

Da bi programer radio stvari, da je dobar, da je dobro plaćen, da je ekspert, mora biti zanatlijan, bar u svom slobodnom vremenu. A puno programera programira u slobodnom vremenu, to je duboko u našoj kulturi.

Mnogi, mnogi, mnogi programeri su zanatlijani sa strane, i moraju biti, jer ne možeš tu zanatlijanstvo iz progamiranja. Uvek moraš. Uvek moraš da ga povežeš na neki način. To je ljudski faktor. To je faktor koji ne dozvoljava AI da sve uradi za nas, jer samo **mi** možemo da povežemo softverske "bitove", i da im damo smisao.

Uzimam citat iz Baki, grapple-r:

> Onaj koji radi naporno, nikada ne može da porazi onog koji uživa samom sebi.
