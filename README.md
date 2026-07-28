# E³ Fellows Program — website

Static site for the Visiting Assistant Professor (Engineering Education &
Excellence — E³) Fellows Program, Department of Engineering Education, Herbert
Wertheim College of Engineering, University of Florida.

## Pages

`index` · `program` · `timeline` · `fellows` · `mentors` · `outcomes` · `contact`
— that is also the navbar order. To add or reorder pages, update the `<nav>`
block in **every** page (the header is duplicated, not templated) and the
"Explore" column in the footer.

## Adding people

Fellows and mentors render from two data files; you should not need to touch any
HTML.

| Page | Edit this file |
|---|---|
| Fellows | `assets/js/fellows-data.js` |
| Mentors | `assets/js/mentors-data.js` |

Both use the same entry shape, rendered by the shared `assets/js/people.js`:

```js
{
  name: "Jane Doe, Ph.D.",              // "" → renders as "to be announced"
  dept: "Chemical Engineering",
  role: "Associate Professor",          // optional, mentors only by convention
  photo: "assets/img/headshots/jane-doe.jpg",   // "" → silhouette placeholder
  bio: "One to three sentences, roughly 250 characters.",
  links: [{ label: "Faculty profile", url: "https://..." }]
}
```

Filter chips and the department tally are generated from the data. Fellows use
the fixed `E3_DEPARTMENTS` list for ordering; mentors derive departments from
whatever `dept` values appear, so a mentor from outside the fellow's department
just works.

Headshots: square crop, 600×600 or larger, lowercase hyphenated filenames. See
`assets/img/headshots/README.md`.

## Styling

Design tokens (UF blue `#0021A5`, UF orange `#FA4616`, neutrals, type scale) are
in the `:root` block at the top of `assets/css/style.css`.

Two things to know before editing:

- `--uf-orange-ink` (`#B8340D`) is used wherever orange appears as body-sized
  text — `#FA4616` on white fails WCAG AA at small sizes.
- The nav breakpoint is **1100px** and appears in two places that must stay in
  sync: the `@media (max-width: 1100px)` block in `style.css` and the resize
  handler in `assets/js/main.js`.

## Still to fill in

- `contact.html` — program email, phone, director/coordinator name.
- `outcomes.html` — the "Inaugural cohort results" cards, once the year is done.
- `assets/js/fellows-data.js` and `assets/js/mentors-data.js` — all entries.
- Official UF signature artwork, if wanted in place of the text lockup in the
  header. UF trademarks have usage rules; obtain approved files from UF
  Strategic Communications rather than recreating them.
