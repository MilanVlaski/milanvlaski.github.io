---
order: 1
prod: true
try_it: https://milanvlaski.github.io/workout-logger/
github_url: https://github.com/MilanVlaski/workout-logger
title: Workout Logger
thumbnail: /assets/img/workout_logger.png
thumbnail_orientation: portrait
description: A text based workout logging app which acts as your gym notebook. It's designed to stop 'fat-finger' errors, and works 100% offline.
status: Fully functioning demo.
---

<video controls poster="/assets/video/thumbnail/workout_logger.png">
    <source src="/assets/video/workout_logger_demo_01_04_2026.mp4" type="video/mp4"> 
</video>
<script>
  const video = document.querySelector('video')
  video.volume = 0.15
</script>

A notebook and pen are the great for workout logging — zero lag, no crashing, and total reliability, but they're somewhat embarrassing to carry. Workout Logger is a text-based PWA (progressive web application) built to bridge that gap. It eliminates "fat-finger" errors caused by tiny buttons and sliders, allowing you to log sets as fast as you can type. Works perfectly without wi-fi.

### User-Owned Data
Unlike bloated SaaS alternatives, this app treats your data as *yours*.
* **The Minimalist:** Log a session and export immediately to a `.txt` or `.csv` file. 
* **The Spreadsheet Warrior:** Periodic exports to Excel/Google Sheets.
* **The Set-and-Forget User:** Optional cloud backup for seamless multi-device syncing.

---

### Technical Architecture & "Offline-First" Specs

* **Frontend:** Vanilla JS with **Lit (Web Components)** for a lightweight, native-standard UI.
* **Persistence:** **IndexedDB** is the primary source of truth. The app uses a "Dirty Flag" sync strategy to ensure zero data loss during network drops.
* **Backend:** A **Bun + PostgreSQL** stack for optional cloud persistence and JWT-based authentication.

IndexedDB is big enough to handle years of data, and it's transactional, which keeps data consistent.

---

### Commercial & Sustainability Model
The project is free from predatory subscription models, and is monetized as follows:

1.  **Functional demo:** 100% free to try, featuring local-only logging and export testing.
2.  **Personal backup:** A one-time purchase for users who want 100% offline-only persistence with no recurring fees.
3.  **Cloud sync:** A low-cost tier for persistent, cross-device backups and template management.

---

### Supported Workflows
* **Exercise templating:** Reuse previous workouts to save time.
* **Multi-format support:** Display workouts with more, or fewer lines.
* **Standardized export:** Clean CSV headers for easy data analysis in external tools, e.g., Excel or Google Sheets.
