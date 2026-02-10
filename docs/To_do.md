- [x] Implement writing, and a page with list of writings
- [x] Make a list
- [x] Projects should show a template like
- [x] Show image
- [x] Portrait layout details page will have the picture floating left, or perhaps flex.
- [x] Landscape layout will have the image accross the screen
- [x] Make external links open externally 
- [x] Add more to nav
- [x] Write a page of freelance work you do...
- [x] Add linkedin, github
- [ ] Add videos ~~and thumbnail~~ to "more" page. 
  - [ ] Consider putting videos on youtube!
- [x] A page on what inspires my freelance work, and work in general
- [ ] Translation
  - [ ] Translations file, for header, footer.
  - [ ] Translate
    - [ ] Index
    - [ ] 
- [ ] Language dropdown
- [ ] Light/Dark switch
- [ ] 


1. The 11ty File Structure
The cleanest way to organize this is to put your Serbian content in a subfolder and your English content at the root (or in its own folder but mapped to the root).

Plaintext

src/
├── _data/
│   └── languages.json  (Define your 'en' and 'sr' settings)
├── en/
│   ├── en.json         (Set layout and permalink logic for English)
│   └── index.md        (Becomes yourdomain.com/index.html)
└── sr/
    ├── sr.json         (Set layout and permalink logic for Serbian)
    └── index.md        (Becomes yourdomain.com/sr/index.html)
2. Setting the Permalinks
In your src/sr/sr.json (Directory Specific Data File), you tell 11ty to prefix every URL with /sr/:

JSON

{
  "layout": "layouts/base.njk",
  "permalink": "/sr/{{ page.fileSlug }}/index.html"
}
For your English files in src/en/en.json, you keep it standard:

JSON

{
  "layout": "layouts/base.njk",
  "permalink": "/{{ page.fileSlug }}/index.html"
}

1. Create a "Dictionary" (Global Data)
Instead of one giant JSON for all pages, create a src/_data/translations.js (or .json) file. This holds the strings that change.

JavaScript

module.exports = {
  hero_title: {
    en: "I build amazing websites.",
    sr: "Pravim neverovatne veb sajtove."
  },
  view_work: {
    en: "View my work",
    sr: "Pogledajte moje radove"
  }
};
2. Parameterize your HTML
You don't need to delete your HTML. You just turn your .html files into .njk (Nunjucks) or keep them as .html with Liquid/Nunjucks front matter.

You use a variable to determine the language. 11ty will look at the folder the file is in to decide if lang is "en" or "sr".

Your src/sr/index.html would look like this:

HTML

---
lang: sr
---
<h1>{{ translations.hero_title[lang] }}</h1>
<button>{{ translations.view_work[lang] }}</button>
