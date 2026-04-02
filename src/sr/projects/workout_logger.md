---
order: 1
prod: true
try_it: https://milanvlaski.github.io/workout-logger/
github_url: https://github.com/MilanVlaski/workout-logger
title: Trening zapisnik
thumbnail: /assets/img/workout_logger.png
thumbnail_orientation: portrait
description: Zapisnik treninga koja služi kao rokovnik. Dizajniran da eliminiše promašaje prstima. Radi 100% bez interneta.
status: Potpuno funkcionalna probna verzija.
---

<video controls poster="/assets/video/thumbnail/workout_logger.png">
    <source src="/assets/video/workout_logger_demo_01_04_2026.mp4" type="video/mp4"> 
</video>
<script>
  const video = document.querySelector('video')
  video.volume = 0.15
</script>

Sveska i olovka su izvrsni za zapisivanje treninga — jer ne zastajkuju i pouzdani su, ali pomalo je blam nositi ih. Trening zapisnik je PWA (progressive web application) stvorena da riješi taj problem. Ona eliminiše promašaje dijelova ekrana prstima, te omogućava da zapišete kao da ih pišete olokvom. Radi savršeno bez wi-fi.

### Korisnički podaci
Za razliku od teških alternativa, ova aplikacija tretira podatke kao *vaše*.
- **Za minimaliste**: Zapišite sesiju, i odmah je izvezite u `.txt.` ili `.csv`.
- **Za tabelaše**: Periodično izvezite podatke u Excel ili Google Sheets.
- **Za ležernije korisnike**: Podacu su "u oblaku" za jednostavno korištenje na više uređaja.

---

### Arhitektura i oflajn rad
* **Frontend:** Vanilla JS sa **Lit (Web Components)** za lagan, i web-standardan korisnički interfejs.
* **Skladište podataka:** **IndexedDB** je glavni izvor. Aplikacija koristi "dirty flag" strategiju, za praćenje sačuvanih zapisa.
* **Backend:** **Bun + PostgreSQL** stek, sa opcionim klaudom, i autentikacijom baziranoj na JWT.

IndexedDB je dovoljno velik za višegodišnje podatke.

---

### Komercijalni model
Projekat je oslobođen agresivnih modela pretplate, a način monetizacije je sledeći:

1.  **Funkcionalna demonstracija:** 100% besplatno za isprobati, sa lokalnim logovanjem, i testiranjem eksporta.
2.  **Lični bekap:** Samo jednom uplatom, korisnici dobijaju 100% oflajn skladište podataka.
3.  **Cloud sinhronizacija:** Uz pretplatu, omogućen je cloud, čime se otvara mogućnost korištenja na više različitih uređaja, uz dodatnu sigurnost podataka.
  
---

### Podržani procesi (Workflows)
* **Šabloni za vježbanje:** Ponovo iskoristite prethodne treninge kako biste uštedili vrijeme.
* **Višeformatni prikaz:** Prikažite treninge sa više ili manje redova, po želji.
* **Standardizovani izvoz:** Čista CSV zaglavlja za laku analizu podataka u spoljnim alatima, kao što su Excel ili Google Sheets.
