---
title: Inženjerstvo i Zanat
---
## Softversko inženjerstvo protiv softverskog zanatstva

Razmislimo o programiranju kao o inženjerstvu, zanatstvu ili umjetnosti. Vjerujem da ovo što vidimo sa LLM-ovima zapravo ubrzava ovu stranu softverskog inženjerstva. Prvo, hajde da definišemo šta je to softversko inženjerstvo. Dakle, to je *u suštini* uzimanje nečega što je već poznato iz nauke, iskustva ili najbolje prakse, i puko primjenjivanje na problem koji je pred nama. U 90% slučajeva, to je više "najbolja praksa" nego stvarna nauka, ali u principu, to je ono što inženjerstvo jeste.

Ako se odvede u ekstrem, ono proizvodi izuzetno dosadan i uvijek komplikovan kod. Uvijek komplikovaniji nego što treba da bude, jer nije izgrađen od niskonivojskih komponenti u minimalistički kod i rješenje.

Prati proces tipa: "Aha, treba ti sigurnost? Okej, treba da koristiš ovu biblioteku." I ako imaš, ne znam, backend, treba da koristiš ovaj framework, i tako dalje. Ako imaš frontend, koristi ovo. To zvuči kao solidan savjet, ali nikada nije minimalistički. Savršeno je korektno, ali je užasno dosadno i ljudima teško za razumijevanje zbog same veličine i konceptualne naduvanosti — jer svaki framework ili "velika biblioteka" koristi koncepte koje moraš da poznaješ. Naravno, u teoriji ih je lako savladati jer se koncepti ponavljaju, ali ako nema suvišnih koncepata, onda nemaš šta novo ni da učiš! To je manji kognitivni napor!

To je ista vrsta napora koji ulažemo opravdavajući kupovinu nečega što ne možemo sebi da priuštimo. Beskorisno je, nasuprot sirove logike: 0 potrošenih dolara plus učenje nečeg novog se uvijek isplati i otporno je na recesiju.

Tu nastupaju LLM-ovi. Za mene, veliki dio mog iskustva sa kodom koji je napisala vještačka inteligencija je isti kao i sa ljudskim kodom:

> Ovo nije vrijedno ni čitanja. Radije bih to sam napravio.

I često, mada ne uvijek, to je zato što osjećam da je autor koda, bilo čovjek ili AI, zaražen nekim načinom razmišljanja o kodu sa kojim se ne slažem. Glavni krivac je Java. Pogledaj tekst [Zašto ostavljam Javu po strani]({{ "/writing/setting_java_aside" | locale_url }}).

## Bolji proces

Ja bih definisao suprotan proces, gdje uzmemo sve one sitne, sirove djeliće podataka koje treba obraditi u softverskom sistemu i smislimo najjednostavnije rješenje za to. To obično uključuje jednostavne protokole i postojeća rješenja, kao što su Linux, Bash, SQL, HTML, CSS, itd. Ovo nam omogućava da prilagodimo rješenja tako da dobijemo mnogo manje linija koda.

Međutim, ovo na kraju bude manje razumljivo drugima. Po definiciji je manje razumljivo jer danas, ako ne koristiš frameworke, niko ne zna kako, na primjer, funkcioniše običan (vanilla) JavaScript. Ako znaš kako da koristiš veb komponente (Web Components), primijetićeš da one mogu tvoje frontend frameworke učiniti suvišnim.

## Veb kao otjelovljenje ove filozofije

Ono što veb, u kombinaciji sa pregledačem, čini nevjerovatno moćnim jeste to što je on tekstualni GUI. Možeš da se igraš sa HTML-om i CSS-om kako god želiš i završiš sa funkcionalnim skupom UI elemenata. Ne znam dovoljno o istoriji softvera da bih rekao da je ovo nečuveno, ali činjenica da vidimo toliko alata za build (build tools) na frontendu govori o tome da ljude nije briga za magiju veba. To podsjeća na Unix filozofiju koja kaže da je "tekst univerzalni interfejs". Upravo tako.

## Povratak na inženjerstvo

Ipak, nije stvar u tome da bavljenje softverskim inženjerstvom znači da treba 100% svega graditi od nule. Samo mislim da je zanatstvo zabavnije. A ako je moguće biti plaćen za nešto što je zabavnije, onda to želim da radim. Ne radi se ni o čemu drugom. Ušao sam u programiranje jer sam htio da živim od toga, ali onda sam saznao šta je softversko inženjerstvo i vidio da je krajnji cilj inženjerstva posjedovanje repozitorijuma najboljih praksi koje se uvijek iznova koriste. Što je veoma dosadno. A ja se trudim da ne budem dosadna osoba. Trudim se da budem kreativan i snalažljiv, tako da nije poenta u tome da je inženjerstvo loše, a zanatstvo dobro. Potrebno je oboje. Svaki softverski inženjer je pomalo i zanatlija.

Samo što ja lično želim da budem zanatlija. Želim da pravim softver i da ga pokazujem ljudima. I želim da ti ljudi kažu: "Vau, ovo je baš kul."

Da bi programer radio stvari kako treba, da bi bio dobar, dobro plaćen i stručnjak, on mora biti zanatlija, barem u slobodno vrijeme. A mnogi programeri programiraju u slobodno vrijeme — to je duboko u našoj kulturi.

Citiraću Bakija (Baki the Grappler):

> Onaj koji naporno radi nikada ne može pobijediti onoga koji uživa.
