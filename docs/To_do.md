- [x] Implement writing, and a page with list of writings
- [x] Make a list
- [x] Projects should show a template like
- [x] Show image
- [x] Portrait layout details page will have the picture floating left, or perhaps flex.
- [x] Landscape layout will have the image accross the screen
- [x] Make external links open externally 
- [x] Add more to nav
- [x] Write a page of freelance work you do...
- [ ] Add linkedin, github
- [ ] Mention that I like manga, and the manga I like
- [ ] Add videos ~~and thumbnail~~ to "more" page. 
  - [ ] Consider putting videos on youtube!
- [ ] A page on what inspires my freelance work, and work in general
- [ ] Light/Dark switch
- [ ] Language dropdown
- [ ] 


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

import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";

- Handling links
export default function(eleventyConfig) {
  // This tells 11ty: "Watch my links and fix them automatically"
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
}

# Marineska
1. The Global Language Data
First, define your supported languages in src/_data/languages.js:

JavaScript

module.exports = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" }
];

2. The "One HTML File" Strategy
Instead of putting index.html inside an /en/ folder, you put it in your root (or a generic source folder) and use Pagination to tell 11ty to generate it once for every language in your data.

src/index.html:

HTML

---
pagination:
  data: languages
  size: 1
  alias: locale
permalink: "/{{ locale.code }}/index.html"
layout: base.njk
---
<h1>{{ ui.welcome_msg[locale.code] }}</h1>
3. Solving the Links Globally
To handle the "prefix thingy" automatically, you can create a small JavaScript filter. This filter checks if the language is your default; if it isn't, it prepends the language code.

In your .eleventy.js:

JavaScript

eleventyConfig.addFilter("localPath", function(url, lang) {
  // If English is your default and you want it at root, 
  // you can return just the url. 
  // But since we chose the /en/ /es/ structure:
  return `/${lang}${url}`;
});
Usage in your "One" HTML set:
<a href="{{ '/projects/' | localPath(locale.code) }}">

4. Handling the Content Folders
For your projects and writing directories, you have two options:

Option A: The Manual Way (Clearer for translation)
You keep src/en/projects/my-post.md and src/es/projects/mi-post.md. Since these contain the actual body text of your writing, they must be separate files anyway.

Option B: The Parameterized Way (Harder)
You keep one Markdown file but put the Spanish text inside the Front Matter or a JSON field. I don't recommend this—it makes writing long articles a nightmare because you lose Markdown formatting for the "hidden" language.

5. The Directory Structure for this Approach
Plaintext

src/
├── _data/
│   ├── languages.js   # ["en", "es"]
│   └── ui.json        # { "welcome_msg": { "en": "Hi", "es": "Hola" } }
├── _includes/
│   └── base.njk       # The master structure
├── projects/          # Your English .md files
├── es/projects/       # Your Spanish .md files
├── index.html         # One file with Pagination (Generates /en/ and /es/)
├── projects.html      # One file with Pagination (Generates /en/projects/ and /es/projects/)
└── writing.html       # One file with Pagination (Generates /en/writing/ and /es/writing/
