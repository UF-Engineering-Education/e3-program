/* ===========================================================================
   FACULTY MENTORS — Fall 2026 / Spring 2027
   ---------------------------------------------------------------------------
   Edit this file to update the Mentors page. Same shape as fellows-data.js,
   with one extra optional field:

     name   - full name with credentials, e.g. "Jane Doe, Ph.D."
     dept   - the mentor's home department or unit
     role   - optional title line, e.g. "Associate Professor"
     photo  - "assets/img/headshots/jane-doe.jpg" (square, 600x600 or larger).
              Leave "" for a placeholder silhouette.
     bio    - 1-3 sentences, roughly 250 characters.
     bioFull- optional full biography, as an array of paragraphs. When present
              the card becomes clickable and opens a dialog with the full text.
     links  - optional array of { label, url }
     kind   - "domain" or "education". Every Fellow gets two mentors: one from
              the Fellow's host unit providing domain expertise, and one from
              EEd (or another faculty member with engineering-education
              expertise) providing pedagogical expertise. This renders as a
              chip on the card.
     mentees- optional array of fellow names this mentor is paired with. Names
              should match those in fellows-data.js.

   NOTE: a mentor may be paired with more than one fellow, and does NOT have to
   come from the fellow's own department. The department filter chips and the
   tally are generated from whatever `dept` values appear below, so you can add,
   rename, or remove departments here freely without touching any HTML.
   =========================================================================== */

window.E3_MENTORS = [
  { name: "", dept: "Engineering Education", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Chemical Engineering", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Chemical Engineering", role: "", photo: "", bio: "", links: [] },
  {
    name: "Walter Lee Murfee, Ph.D.",
    dept: "Biomedical Engineering",
    role: "Professor & Senior Associate Chair",
    kind: "domain",
    photo: "assets/img/headshots/walter-murfee.jpg",
    mentees: [
      "Bryce Shirk, Ph.D.",
      "Jessica Sena, Ph.D.",
      "Michael “Mike” Strinden, Ph.D."
    ],
    bio: "Dr. Murfee's research connects tissue-level function to integrated cellular dynamics, using in vivo, in vitro, and computational approaches to investigate vascular patterning and angiogenesis.",
    bioFull: [
      "Dr. Murfee's research is focused on making scientific discoveries and developing new bioengineering approaches for connecting tissue level function to integrated cellular dynamics. Specifically, his laboratory applies in vivo, in vitro, and computational approaches to investigate the vascular patterning and the functional relationships between angiogenesis and other processes, such as lymphangiogenesis and neurogenesis.",
      "Murfee's work provides valuable insights for the engineering of functional vascularized tissues and for understanding vascular dysfunction associated with multiple pathological conditions, such as aging, hypertension, and tumor growth."
    ],
    links: [
      { label: "Faculty profile", url: "https://bme.ufl.edu/people/faculty/name/walter-murfee/" }
    ]
  },
  { name: "", dept: "Biomedical Engineering", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Biomedical Engineering", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Materials Science & Engineering", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Materials Science & Engineering", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Engineering Leadership", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Engineering Innovation", role: "", photo: "", bio: "", links: [] }
];
