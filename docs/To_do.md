- [x] Implement writing, and a page with list of writings
- [x] Make a list
- [x] Projects should show a template like
- [x] Show image
- [x] Portrait layout details page will have the picture floating left, or perhaps flex.
- [x] Landscape layout will have the image accross the screen
- [x] Make external links open externally 
- [ ] Mention that I like manga, and the manga I like
- [ ] Add videos ~~and thumbnail~~ to "more" page. 
  - [ ] Consider putting videos on youtube!
- [ ] Write a page of freelance work you do...
  - [ ] Plus a page on what inspires it!
- [ ] Light/Dark switch
- [ ] Language dropdown
- [ ] Add more to nav
- [ ] L


 Recommended Approaches:                                                                    
                                                                                      
  1. Directory-based localization (Simplest & Most Efficient)

  Create language-specific output structures:
  src/
  ├── sr/                    # Serbian content
  │   ├── index.njk          # Serbian home page
  │   ├── about.njk
  │   └── ...
  ├── en/                    # English content (existing)
  │   ├── index.njk/
  │   └── ...
  └── index.njk              # Default/English

  In .eleventy.js, add a permalink pattern to generate /sr/ URLs for Serbian pages.

  2. Data-driven translations (For reusable text)

  Create translation JSON files:
  src/_data/
  ├── translations/
  │   ├── en.json
  │   └── sr.json

  Usage in templates: {{ translations.nav.home }}

  3. Use eleventy-plugin-i18n (Most feature-rich)

  Install the plugin which handles:
  - Language switching
  - URL paths (/sr/ prefix)
  - Translation data
  - Hreflang tags automatically

  For your simple site, I recommend #1 + #2 combined: Directory-based routing with a shared
  translations data file for navigation, headers, and common UI text.

  Would you like me to implement this? I can:
  - Set up Serbian (/sr/) versions of your pages
  - Create translation data files
  - Add a language switcher to your navigation
  - Configure Eleventy to handle both languages

  Which approach would you prefer, or would you like me to show you how to implement the most
   efficient combination?
