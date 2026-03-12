---
order: 1
prod: true
try_it: https://milanvlaski.github.io/workout-logger/
github_url: https://github.com/MilanVlaski/workout-logger
title: Workout Logger
thumbnail: /assets/img/workout_logger.png
thumbnail_orientation: portrait
description: Veb aplikacija za zapisivanje treninga bazirana na tekstu, koja sprječava slučajne promašaje prstima po ekranu. Zapisi mogu biti ili sačuvani od strane korisnika (u Excel tablici), ili kao tekst. Dodatno, sistem može sačuvati zapise na cloud-u.
---
[Draw.Io Sketches](https://drive.google.com/file/d/1d-ZH9s9k2A0bmclrXqE7jhGuTIRHhg6i/view?usp=sharing)

Veb aplikacija za zapisivanje treninga bazirana na tekstu, koja sprječava slučajne promašaje prstima po ekranu. Zapisi mogu biti ili sačuvani od strane korisnika (u Excel tablici), ili kao tekst. Dodatno, sistem može sačuvati zapise na cloud-u.

(Ovaj sadržaj preveden na Srpski korištenjem vještačke inteligencije)

 Sveska i olovka bi pružila bolje UX, ali nisu lako da se nose u teretani, tako da ova webapp omogućava skladištenje logova na telefonu, i export treninga drugde, kao tekst.

- Vaši podaci su lokalni - sa periodičnim sinhronizacijom ka vašem ličnom logu, ili cloud-u.
- Instalirano jednom, nikada ne treba internet ponovo.
- VI definišete vežbanja, i imate moć da kontrolišete svoje podatke, da ponovo koristite podatke kao šablone, itd.
## Kome je ovo namenjeno?
1. Pravi jedan trening, exportuje ga u CSV, pa Google Sheets. Mislim da bi neki korisnici to voleli. Ni ne moraju da gledaju log unutar aplikacije.
2. Pravi jedan trening, exportuje kao tekst, i snima u fajl. Ovo sam bio ja, neko vreme.
3. Korisnici kojima nije bitno, koji žele MENI da čuvam, za njih. Na bilo koji način koji ja nađem najjeftiniji i siguran.
4. Korisnici 1 i 2, koji mogu imati veliki log, i odluče da ga uvozu, i onda koriste feature kao:
	1. pamteći uobičajena vežbanja
	2. uzmu prethodni trening kao šablon
	3. Snimaju šablone? Gde? Kao šta podatke? Samo prazan trening?
## Tieri
Demo dozvoljava:
- Pravi trening
- Vidi log
- Klikni export, ali razume da nije dostupno!
Puni korisnici dozvoljavaju:
- Čuvanje loga u DB.
- Export celog loga, ili treninga, kao tekst (u različitim formatima), CSV (za excel, google sheets).
- Pamćenje uobičajenih vežbanja iz našeg loga, i slanje u dropdown-u.
- Uzima prethodni trening kao šablon, prazni ga, i koristi.
- Snima šablone. -> "Snimljeni treningi". Mogu biti imenovani.
- Exportuje nedelju kao nedeljni program.
### Aplikacioni tieri
1. Demo -> Samo dummy ponašanje.
2. Lični Backup - Jednoplaćanje, jer je 100% upotrebljivo offline. Instaliraj PWA sa magic linkom. (Pratim ga u bazi podataka)
3. Cloud Backup. Zahteva trajni JWT na strani klijenta, pošto korisnik može želeti da backupuje u bilo koje vreme. Takođe praćen u bazi podataka.

## Arhitektura
1. Klijent = Vanilla JS. Progressive Web Application. Single Page Application, čuvajući podatke u IndexedDB-a i periodično sinhronizujući ka spolja - cloud ili ne.
2. Host = Cloudflare pages ili VPS
3. Server = Fastify
4. Persistentnost = PostgresSQL
5. Jedan server ili više?

#### Lični backup
1. Offline prvi PWA
2. Autentifikacioni server. Ili možda, potreban samo za instalaciju?
3. Import/Export CSV ili txt.
#### Cloud Backup
1. Zahteva konstantnu autentifikaciju?
##### Napomena
- Tekstualni importovi bi mogli koristiti regex, i možemo koristiti taj regex za brzu validaciju.

## Persistentnost
- Browser indexedDB dozvoljava 100e Megabajta importa
- Workout log u indexedDB-u radi default. Ali je fundamentalno transient. Korisnici treba da to razumeju.
- Opcija se nudi korisnicima koji žele backup-ove.
- Svaki drugi "pametni" feature, radi sa podacima u IndexedDB.
- DexieCloud dozvoljava da se IndexedDB isprazni.
- Supabase je veći.
- IndexedDB ima "synced" zastavicu, na svakom "workout" objektu, koja se ignoriše pri exportu u txt, ili csv, ali je važna za čuvanje u cloudu.
## Tieri
| **Status Icon** | **Label**              | **What it means**                                               |
| --------------- | ---------------------- | --------------------------------------------------------------- |
| 🟢              | **Storage: Protected** | `persist()` was granted. The OS won't touch it.                 |
| 🟡              | **Storage: Standard**  | Data is safe, but the OS might clear it if the phone gets full. |
| 🔴              | **Storage: Low Space** | The device is almost full. Data is at risk.                     |

# NAJPRVI NAPRAVI APLIKACIJU OFFLINE
- Mislim, ovo je korisno čak i za aplikacije za terenski rad + enterprise podatke.
