/* ===========================================================================
   INAUGURAL COHORT DATA — Fall 2026 / Spring 2027
   ---------------------------------------------------------------------------
   This is the only file you need to edit to update the Fellows page.

   For each fellow, fill in:
     name   - full name with credentials, e.g. "Jane Doe, Ph.D."
     dept   - MUST match one of the department names in DEPARTMENTS below
     role   - optional title line, e.g. "Visiting Assistant Instructional
              Professor". Omit it and the line is left out.
     photo  - path to the headshot, e.g. "assets/img/headshots/jane-doe.jpg"
              (square crop, at least 600x600px). Leave "" to show a
              placeholder silhouette until the photo is ready.
     bio    - 1-3 sentences. Keep it to roughly 250 characters so the cards
              stay a consistent height.
     bioFull- optional full biography, as an array of paragraphs. When present
              the card becomes clickable and opens a dialog with the full text.
              Omit it and the card is not clickable.
     links  - optional array of { label, url }, e.g. a lab site or profile.

   Cards render in the order listed here.
   =========================================================================== */

window.E3_DEPARTMENTS = [
  "Engineering Education",
  "Chemical Engineering",
  "Biomedical Engineering",
  "Materials Science & Engineering",
  "Engineering Leadership",
  "Engineering Innovation"
];

window.E3_FELLOWS = [
  {
    name: "Bárbara Fagundes, Ph.D.",
    dept: "Engineering Education",
    role: "Visiting Assistant Instructional Professor",
    photo: "assets/img/headshots/barbara-fagundes.jpg",
    bio: "Bárbara earned her Ph.D. in Engineering Education from Purdue and an M.S. in Computer Science from Jackson State University. Her research spans computing education, computational thinking, AI literacy, and student-centered learning.",
    bioFull: [
      "Bárbara Fagundes is a Visiting Assistant Instructional Professor in the Department of Engineering Education at the University of Florida. She earned her Ph.D. in Engineering Education from Purdue University and an M.S. in Computer Science from Jackson State University.",
      "Her research interests include computing education, computational thinking, AI literacy, and student-centered learning. Her doctoral research focused on computational thinking in K–12 education and teacher professional development.",
      "Before joining UF, she was a postdoctoral researcher at Purdue's Center for Instructional Excellence, where she worked on student autonomy, generative AI in undergraduate STEM education, faculty development, and undergraduate mentoring."
    ],
    links: []
  },
  {
    name: "",
    dept: "Chemical Engineering",
    photo: "",
    bio: "",
    links: []
  },
  {
    name: "",
    dept: "Chemical Engineering",
    photo: "",
    bio: "",
    links: []
  },
  {
    name: "Michael “Mike” Strinden, Ph.D.",
    dept: "Biomedical Engineering",
    role: "Visiting Assistant Instructional Professor",
    photo: "assets/img/headshots/michael-strinden.jpg",
    bio: "Mike works at the intersection of biomedical research, data science, and population health, integrating complex multimodal datasets to understand health and disease as a holistic discipline.",
    bioFull: [
      "Mike's work sits at the intersection of biomedical research, data science, and population health. His research focuses on integrating and analyzing complex multimodal datasets, including transcriptomics, metabolomics, microbiome, clinical, and spatial data, to better understand health and disease as a holistic discipline.",
      "Mike holds a Ph.D. in Biomedical Science from the University of East Anglia, as well as an MPH in Analytics and an MA and BA in Anthropology. His interdisciplinary training has shaped his approach to both research and education, combining quantitative methods with biological and human-centered perspectives.",
      "He has experience teaching biostatistics, forensic osteology, and evolutionary theory, and is particularly interested in developing accessible, rigorous classroom experiences grounded in real-world examples. Across research and teaching, Mike seeks to make complex scientific concepts more approachable while helping students and broader audiences develop the tools to critically engage with scientific information."
    ],
    links: []
  },
  {
    name: "",
    dept: "Biomedical Engineering",
    photo: "",
    bio: "",
    links: []
  },
  {
    name: "",
    dept: "Biomedical Engineering",
    photo: "",
    bio: "",
    links: []
  },
  {
    name: "",
    dept: "Materials Science & Engineering",
    photo: "",
    bio: "",
    links: []
  },
  {
    name: "",
    dept: "Materials Science & Engineering",
    photo: "",
    bio: "",
    links: []
  },
  {
    name: "",
    dept: "Engineering Leadership",
    photo: "",
    bio: "",
    links: []
  },
  {
    name: "",
    dept: "Engineering Innovation",
    photo: "",
    bio: "",
    links: []
  }
];
