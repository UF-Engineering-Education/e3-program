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
  {
    name: "Lilianny Virgüez, Ph.D.",
    dept: "Engineering Education",
    role: "Engineering educator, first-year programs",
    kind: "education",
    photo: "assets/img/headshots/lilianny-virguez.jpg",
    mentees: ["Logan Morton, Ph.D."],
    bio: "Dr. Virgüez is an engineering educator with several years of teaching experience at the first-year level. Her research interests include motivation to succeed in engineering, with a focus on first-year students.",
    bioFull: [
      "Dr. Virgüez is an engineering educator with several years of teaching experience at the first-year level. Her research interests include motivation to succeed in engineering with a focus on first-year students. She has work experience in the telecommunications industry.",
      "Dr. Virgüez holds a Ph.D. in Engineering Education and a Master's degree in Management Systems Engineering from Virginia Tech, and a bachelor's degree in Telecommunications Engineering from the National Experimental University of the Armed Forces in Venezuela. She is a member of the American Society for Engineering Education (ASEE)."
    ],
    links: [
      { label: "Faculty profile", url: "https://eed.eng.ufl.edu/people/faculty/name/lilianny-virguez/" }
    ]
  },
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
  {
    name: "May Mansy, Ph.D.",
    dept: "Biomedical Engineering",
    role: "Instructional Associate Professor, Director of Peer Learning and Mentoring, and J. Crayton Pruitt Family Term Fellow",
    kind: "education",
    photo: "assets/img/headshots/may-mansy.jpg",
    mentees: ["Jessica Sena, Ph.D."],
    bio: "Dr. Mansy is the primary instructor for Biomedical Instrumentation, Biomedical Signals and Systems, and Educational Methods for BME Learning Assistants, and founded the department's Learning Assistant program.",
    bioFull: [
      "Dr. Mansy's doctoral research is motivated by recording neural activity on the ensemble and cellular levels, using optical methods like two-photon imaging, epi-fluorescent imaging, and Fiber Photometry. Her focus is the systematic device characterization of Fiber Photometry, appraising its sensitivity, dynamic range, and spatial detection extent. Mansy is well-versed in a wide range of neuroscience research techniques, including stereotaxic cranial surgery and implants, histological analysis, neural data analysis, neural device design, and peripheral nerve surgery and stimulation. While completing her Ph.D. in Biomedical Engineering, Mansy was a teaching assistant for three graduate and undergraduate courses with the Biomedical Engineering department and the Electrical and Computer Engineering department at UF.",
      "Dr. Mansy is currently the primary instructor for Biomedical Instrumentation (lecture and lab), Biomedical Signals and Systems, and Educational Methods for BME Learning Assistants. She views teaching as an art extending existing cognitive frameworks in students' minds. As a trained neuroscientist, her approach integrates neural insights with Kolb's Experiential Learning Theory, focusing on a four-stage learning cycle: concrete experience, reflective observation, abstract hypothesis formulation, and active testing. She supports this cycle through diverse classroom experiences tailored to individual learning styles, fostering sensory engagement to optimize memory and attention. She promotes reflective and abstract thinking through personalized interactions and collaborative problem-solving, aiming to resonate with students' interests and emotional drivers, encouraging more profound understanding and retention. Mansy's methods not only aim to fulfill academic goals but also nurture a supportive, emotionally aware educational environment, ensuring that students are academically and holistically prepared for their futures.",
      "Mansy is the founder, developer, and driver of a BME Learning Assistant program and has been successfully running it since Fall 2021. The LA model is a collaborative learning strategy that aims to train undergraduate frontrunners who succeeded in a course with a strong showing to assist the next cohort of students in learning the course content. The BME LA program is the first LA program in the Herbert Wertheim College of Engineering at the University of Florida and, according to the LAA database, the only discipline-specific LA program for Biomedical Engineering. The program trains undergraduate frontrunners on research-based learning strategies to help their peers navigate foundational BME courses."
    ],
    links: [
      { label: "Faculty profile", url: "https://bme.ufl.edu/people/faculty/name/may-mansy/" }
    ]
  },
  {
    name: "Ana Maria Porras, Ph.D.",
    dept: "Biomedical Engineering",
    role: "Assistant Professor & J. Crayton Pruitt Family Term Fellow",
    kind: "education",
    photo: "assets/img/headshots/ana-porras.jpg",
    mentees: ["Bryce Shirk, Ph.D."],
    bio: "Dr. Porras leads the Tissue-Microbe Interactions lab, engineering in vitro models of disease to study human-microbe interactions across the microbiome, global health, and infectious disease.",
    bioFull: [
      "Dr. Porras leads the Tissue-Microbe Interactions lab, specialized in engineering in vitro models of disease to study human-microbe interactions. She is particularly interested in understanding how microbes interact with human extracellular matrix to drive disease in the contexts of the microbiome, global health, and infectious disease.",
      "Dr. Porras is also a science artist and an expert on inclusive multilingual science communication."
    ],
    links: [
      { label: "Faculty profile", url: "https://bme.ufl.edu/people/faculty/name/ana-porras/" }
    ]
  },
  { name: "", dept: "Materials Science & Engineering", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Materials Science & Engineering", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Engineering Leadership", role: "", photo: "", bio: "", links: [] },
  { name: "", dept: "Engineering Innovation", role: "", photo: "", bio: "", links: [] }
];
