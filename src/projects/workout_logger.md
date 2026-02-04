---
order: 1
prod: true
showcase: https://milanvlaski.github.io/workout-log-demo/
showcase_variant: DEMO
github_url: https://github.com/MilanVlaski/workout-log-demo
title: Workout Logger
thumbnail: /assets/img/workout_logger.png
thumbnail_orientation: portrait
description: Text based workout logging app, with an accessible GUI. A temporary log is kept inside the app, shown as text. A notebook and pen would provide better UX, but they're not easy to carry in a gym, so this webapp allows storing logs on your phone, and exporting the workout elsewhere, as text.
---

[Draw.Io](https://drive.google.com/file/d/1d-ZH9s9k2A0bmclrXqE7jhGuTIRHhg6i/view?usp=sharing)

# Summary
 Text based workout logging app, with an **accessible** GUI. A temporary log is kept inside the app, shown as text. Workout logs can be either backed up by the user (in an Excel sheet), or as text. Aditionally, the system may provide cloud backup.
 
A notebook and pen would provide better UX, but they're not easy to carry in a gym, so this webapp allows storing logs on your phone, and exporting the workout elsewhere, as text.

- Your data is local - with periodic syncing to your personal log, or the cloud.
- Installed once, never needs internet again.
- YOU define the exercises, and are empowered to control your own data, reuse data as templates, etc.
## Architecture
1. Client = Vanilla JS. Progressive Web Application. Single Page Application, keeping data in IndexedDB and periodically syncing to the outside - cloud or not.
2. Host = Cloudflare pages or VPS
3. Server = Fastify
4. Persistence = PostgresSQL
5. One server or many?
## Tiers
Demo allows:
- Create workout
- See log
- Click export, but understand it's not available!
Full users allows:
- Persisting the log in a DB.
- Export entire log, or workouts, as text  (in different formats), CSV (for excel, google sheets).
- Remembering common exercises from our log, and serving them in a dropdown.
- Take a previous workout as a template, empty it, and use it.
- Save templates. -> "Saved workouts". Can be named.
- Export a week as weekly program.
## User types
1. Makes a single workout, exports it to CSV, so Google Sheets. I think some users would like that. They don't even need to view the log inside the app.
2. Makes a single workout, exports as text, and saves in a text file. This was me, for a while.
3. Users who don't care, who want ME to persist it, for them. In whichever way I find most cheap and efficient, and safe.
4. Users 1 and 2, who might have a big log, and decide to import it, and then use features like:
	1. remembering common exercises
	2. take a previous workout as a template
	3. Save templates? Where? As what data? Just an empty workout?
### App tiers
1. Demo -> Only dummy behavior.
2. Personal Backup - One time purchase, because it's 100% usable offline. Install PWA with magic link. (I track it in a database)
3. Cloud Backup. Requires a persistent JWT on the client side, because a user might wanna back up at any time. Also tracked in the database.
#### Personal backup
1. Offline first PWA
2. Authentication server. Or perhaps, it's only required for installing?
3. Import/Export CSV or txt.
#### Cloud Backup
1. Requires constant authentication?
##### Note
- Text imports could use a regex, and we could use that regex for quick validation.

## Persistence
- Browser indexedDB allows 100s of Megabytes imported
- Workout log in indexedDB works by default. But it's fundamentally transient. Users should understand that.
- An option is offered to users who want backups.
- Every other "smart" feature, works with the data in IndexedDB.
- DexieCloud allows IndexedDB to be dumped.
- Supabase is bigger.
- The IndexedDB has a "synced" flag, on each "workout" object, which is ignored when exporting to txt, or csv, but is important for saving to cloud.
## Tiers
| **Status Icon** | **Label**              | **What it means**                                               |
| --------------- | ---------------------- | --------------------------------------------------------------- |
| 🟢              | **Storage: Protected** | `persist()` was granted. The OS won't touch it.                 |
| 🟡              | **Storage: Standard**  | Data is safe, but the OS might clear it if the phone gets full. |
| 🔴              | **Storage: Low Space** | The device is almost full. Data is at risk.                     |

# MAKE THE APP OFFLINE FIRST
- I mean, this is useful even for apps that are field work + enterprise data.
