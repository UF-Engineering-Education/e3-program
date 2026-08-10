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
    bio: "Dr. Fagundes earned her Ph.D. in Engineering Education from Purdue and an M.S. in Computer Science from Jackson State University. Her research spans computing education, computational thinking, AI literacy, and student-centered learning.",
    bioFull: [
      "Bárbara Fagundes is a Visiting Assistant Instructional Professor in the Department of Engineering Education at the University of Florida. She earned her Ph.D. in Engineering Education from Purdue University and an M.S. in Computer Science from Jackson State University.",
      "Her research interests include computing education, computational thinking, AI literacy, and student-centered learning. Her doctoral research focused on computational thinking in K–12 education and teacher professional development.",
      "Before joining UF, she was a postdoctoral researcher at Purdue's Center for Instructional Excellence, where she worked on student autonomy, generative AI in undergraduate STEM education, faculty development, and undergraduate mentoring."
    ],
    links: [
      { label: "Personal website", url: "https://iambarbaraf.com/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/iambarbaraf/" }
    ]
  },
  {
    name: "Yu Zhang, Ph.D.",
    dept: "Chemical Engineering",
    role: "Visiting Assistant Instructional Professor",
    photo: "assets/img/headshots/yu-zhang.jpg",
    bio: "Dr. Zhang teaches undergraduate chemical engineering courses. Her doctoral research at Michigan used microfluidic technologies to isolate circulating tumor cells, and her current interests include laboratory curriculum design and generative AI in instruction.",
    bioFull: [
      "Yu (Yolanda) Zhang is a Visiting Assistant Instructional Professor at the University of Florida's Herbert Wertheim College of Engineering, where she teaches undergraduate chemical engineering. She earned her Ph.D. in Chemical Engineering from the University of Michigan and her B.S. in Chemical Engineering from the University of Washington. Her doctoral research in the S. Nagrath Lab focused on microfluidic technologies for isolating circulating tumor cells for pancreatic disease applications, and tissue engineering for culturing those rare cells.",
      "At Michigan she served as a graduate teaching assistant for two semesters, completed the Graduate Teaching Certificate, and undertook coursework in engineering education research. Her current interests include laboratory curriculum design, the integration of generative AI into engineering instruction, and online and internationally collaborative course design."
    ],
    links: [
      { label: "Personal website", url: "https://personal-webpage-yolandaz.vercel.app/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/yolandazh/" }
    ]
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
    bio: "Dr. Strinden works at the intersection of biomedical research, data science, and population health, integrating complex multimodal datasets to understand health and disease as a holistic discipline.",
    bioFull: [
      "Mike's work sits at the intersection of biomedical research, data science, and population health. His research focuses on integrating and analyzing complex multimodal datasets, including transcriptomics, metabolomics, microbiome, clinical, and spatial data, to better understand health and disease as a holistic discipline.",
      "Mike holds a Ph.D. in Biomedical Science from the University of East Anglia, as well as an MPH in Analytics and an MA and BA in Anthropology. His interdisciplinary training has shaped his approach to both research and education, combining quantitative methods with biological and human-centered perspectives.",
      "He has experience teaching biostatistics, forensic osteology, and evolutionary theory, and is particularly interested in developing accessible, rigorous classroom experiences grounded in real-world examples. Across research and teaching, Mike seeks to make complex scientific concepts more approachable while helping students and broader audiences develop the tools to critically engage with scientific information."
    ],
    links: []
  },
  {
    name: "Jessica Sena, Ph.D.",
    dept: "Biomedical Engineering",
    role: "Visiting Assistant Instructional Professor",
    photo: "assets/img/headshots/jessica-sena.jpg",
    bio: "Dr. Sena's research focuses on artificial intelligence for healthcare, including multimodal machine learning, electronic health records, wearable sensors, computer vision, and large language models.",
    bioFull: [
      "Jessica Sena's research focuses on artificial intelligence for healthcare, including multimodal machine learning, electronic health records, wearable sensors, computer vision, and large language models. She earned her Ph.D. and master's degrees in Computer Science, and her bachelor's degree in Information Systems, from the Federal University of Minas Gerais (UFMG), Brazil. During her Ph.D., she conducted research at the University of Florida as a Fulbright scholar.",
      "She views teaching as a shared process of teaching and learning, where students and educators contribute to the classroom experience. She values dialogue, active participation, and helping students build their own understanding. She also believes in creating a supportive environment that recognizes students' different backgrounds and levels of experience.",
      "Prior to joining the E³ Fellows Program, she was a Postdoctoral Associate in Biomedical Engineering at the University of Florida, where she conducted interdisciplinary research in medical artificial intelligence and contributed to teaching and student mentoring."
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
    name: "Jasmine Smith, Ph.D.",
    dept: "Engineering Innovation",
    role: "Visiting Assistant Instructional Professor",
    photo: "assets/img/headshots/jasmine-smith.jpg",
    bio: "Dr. Smith works with students to build creativity, innovation, and entrepreneurship. Her research treats mentoring communication as a measurable, biologically grounded phenomenon, spanning neuroscience, biomedical engineering, and engineering education.",
    bioFull: [
      "Dr. Smith holds a B.S. in Biochemistry from Mississippi State University, an M.S. in Biomedical Engineering from UF, and a Ph.D. in Engineering Education (BME focus), also from UF. She works with students to build creativity, innovation, and entrepreneurship, collaborating with faculty and instructional leaders on evidence-based teaching practices.",
      "Her research training, spanning cognitive and social neuroscience, biomedical engineering, and engineering education, treats mentoring communication as a measurable, biologically grounded phenomenon, combining neuroimaging (e.g., fMRI, DTI), mixed-method designs, and psychometric techniques. Her interests include the neurobiological and psychophysiological correlates of communication and self-awareness in STEMM mentoring, and grounding AI reliability claims in neurobiological evidence.",
      "She co-founded the Effective Mentoring Strategies Workshop at UF, training STEMM graduate students and postdocs in self- and cultural-awareness, communication, and social capital. She has taught introductory programming, biomedical cellular engineering lab, and research methods, and previously served as Academic Advisor for undergraduates in UF's Computer Engineering program."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jasminesmith97" }
    ]
  }
];
