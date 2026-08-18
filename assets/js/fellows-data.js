/* ===========================================================================
   INAUGURAL COHORT DATA — Fall 2026 / Spring 2027
   ---------------------------------------------------------------------------
   This is the only file you need to edit to update the Fellows page.

   For each fellow, fill in:
     name   - full name with credentials, e.g. "Jane Doe, Ph.D."
     dept   - MUST match one of the department names in DEPARTMENTS below
     role   - optional title line, e.g. "Visiting Assistant Professor".
              Omit it and the line is left out.
     course - optional Fall 2026 teaching assignment, e.g.
              "COP 2273 · Python for Engineers". Omit it and the line is
              left out.
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
    role: "Visiting Assistant Professor",
    course: "COP 2273 · Python for Engineers",
    photo: "assets/img/headshots/barbara-fagundes.jpg",
    bio: "Dr. Fagundes earned her Ph.D. in Engineering Education from Purdue and an M.S. in Computer Science from Jackson State University. Her research spans computing education, computational thinking, AI literacy, and student-centered learning.",
    bioFull: [
      "Bárbara Fagundes is a Visiting Assistant Professor in the Department of Engineering Education at the University of Florida. She earned her Ph.D. in Engineering Education from Purdue University and an M.S. in Computer Science from Jackson State University.",
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
    role: "Visiting Assistant Professor",
    course: "ECH 4504 · Chemical Kinetics and Reactor Design",
    photo: "assets/img/headshots/yu-zhang.jpg",
    bio: "Dr. Zhang teaches undergraduate chemical engineering courses. Her doctoral research at Michigan used microfluidic technologies to isolate circulating tumor cells, and her current interests include laboratory curriculum design and generative AI in instruction.",
    bioFull: [
      "Yu (Yolanda) Zhang is a Visiting Assistant Professor at the University of Florida's Herbert Wertheim College of Engineering, where she teaches undergraduate chemical engineering. She earned her Ph.D. in Chemical Engineering from the University of Michigan and her B.S. in Chemical Engineering from the University of Washington. Her doctoral research in the S. Nagrath Lab focused on microfluidic technologies for isolating circulating tumor cells for pancreatic disease applications, and tissue engineering for culturing those rare cells.",
      "At Michigan she served as a graduate teaching assistant for two semesters, completed the Graduate Teaching Certificate, and undertook coursework in engineering education research. Her current interests include laboratory curriculum design, the integration of generative AI into engineering instruction, and online and internationally collaborative course design."
    ],
    links: [
      { label: "Personal website", url: "https://personal-webpage-yolandaz.vercel.app/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/yolandazh/" }
    ]
  },
  {
    name: "Logan Morton, Ph.D.",
    dept: "Chemical Engineering",
    role: "Visiting Assistant Professor",
    course: "ECH 3023 · Material and Energy Balances",
    photo: "assets/img/headshots/logan-morton.jpg",
    bio: "Dr. Morton's research spans biomaterials, protein engineering, polymer design, and structure-property relationships in soft materials, with applications in regenerative medicine and sustainable resource recovery.",
    bioFull: [
      "Dr. Morton is a Visiting Assistant Professor in the Department of Chemical Engineering at the University of Florida. He earned his Ph.D. and B.S. in Chemical Engineering from the University of Texas at Austin and the University of Missouri.",
      "His research spanned biomaterials, protein engineering, polymer design, and structure-property relationships in soft materials, with applications in regenerative medicine and sustainable resource recovery. Before joining UF, he was a postdoctoral scholar at Tufts University, where he developed silk-based filtration materials for recovering rare earth elements. At Tufts, he also created and taught the Sustainable Materials elective.",
      "An NSF Graduate Research Fellow, Dr. Morton brings extensive experience in research, mentorship, and scientific outreach to his teaching, with a focus on preparing the next generation of scientists and engineers."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/logan-morton-6197b4a1/" }
    ]
  },
  {
    name: "Michael “Mike” Strinden, Ph.D.",
    dept: "Biomedical Engineering",
    role: "Visiting Assistant Professor",
    course: "BME 4311 · Molecular Biomedical Engineering",
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
    role: "Visiting Assistant Professor",
    course: "BME 3053C · Computer Applications for BME",
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
    name: "Bryce Shirk, Ph.D.",
    dept: "Biomedical Engineering",
    role: "Visiting Assistant Professor",
    course: "BME 3323L · Cellular Engineering Laboratory",
    photo: "assets/img/headshots/bryce-shirk.jpg",
    bio: "Dr. Shirk explores how naturally evolved biological processes can be adapted and engineered for applications in biomaterials, biotechnology, and biomanufacturing.",
    bioFull: [
      "Dr. Shirk is a Visiting Assistant Professor in the J. Crayton Pruitt Family Department of Biomedical Engineering at the University of Florida. He earned his Ph.D. in Biomedical Engineering and M.S. in Entomology and Nematology from the University of Florida, and his B.S. in Biochemistry from Florida State University.",
      "His research explores how naturally evolved biological processes can be adapted and engineered for applications in biomaterials, biotechnology, and biomanufacturing. This work includes genetically engineering insects to produce novel functional materials and developing insect cell systems for recombinant protein expression. Before his current position, Dr. Shirk served as a USDA AFRI Postdoctoral Fellow at the University of Florida.",
      "As an educator and mentor, he is passionate about helping students connect engineering concepts to meaningful biological problems, drawing on his interdisciplinary background to make complex scientific ideas accessible across disciplines and audiences."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/bryce-shirk91" }
    ]
  },
  {
    name: "Sophia Ahmed, Ph.D.",
    dept: "Materials Science & Engineering",
    role: "Visiting Assistant Professor",
    course: "EMA 3010 · Materials",
    photo: "assets/img/headshots/sophia-ahmed.jpg",
    bio: "Dr. Ahmed's doctoral research examined salt hydrate eutectic phase change materials for thermal energy storage. Her interests span energy storage materials, phase transformations, engineering education, and STEM outreach.",
    bioFull: [
      "Sophia Ahmed is a UF alumna, earning her B.S. in Materials Science and Engineering from UF in 2020 and her Ph.D. in Materials Science and Engineering from Texas A&M University in 2025. From 2025 to 2026, she completed a postdoctoral position in UF's MSE department in engineering education work.",
      "Her doctoral research, conducted in the PHATE Lab under Dr. Patrick Shamberger, focused on salt hydrate eutectic phase change materials for thermal energy storage, examining the long-term cycling stability of eutectic systems and the mechanisms underlying their degradation. This included work on the discovery of salt hydrate eutectic compositions as well as developing PCM composites.",
      "During her postdoc at UF, working under Dr. Nancy Ruzycki, she coordinated STEM summer camps across Florida and conducted research on near-peer mentorship models and STEM identity. Her interests span energy storage materials, phase transformations, degradation of materials, social implications of materials, engineering education, and STEM outreach."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sophia-ahmed-28050b155/" }
    ]
  },
  {
    name: "Gayani Pathiraja, Ph.D.",
    dept: "Materials Science & Engineering",
    role: "Visiting Assistant Professor",
    course: "EMA 3010 · Materials",
    photo: "assets/img/headshots/gayani-pathiraja.jpg",
    bio: "Dr. Pathiraja's research spans nanomaterials for sensing and wastewater treatment, thermally resistant materials for extreme environments, and the structure-property relationships of semiconductor nanomaterials.",
    bioFull: [
      "Dr. Pathiraja is a Visiting Assistant Professor in the Department of Materials Science and Engineering at the University of Florida. She earned her Ph.D. in Nanoscience from the University of North Carolina at Greensboro, an M.Phil. from the University of Peradeniya, and a bachelor's degree in Materials Science and Technology from Uva Wellassa University, Sri Lanka.",
      "Her research spanned nanomaterials for sensing and wastewater treatment applications, thermally resistant materials for extreme environments, and the structure-property relationships of semiconductor nanomaterials. Before joining UF, she was a postdoctoral researcher at the Science and Technologies for Phosphorus Sustainability (STEPS) center, where she developed nanomaterials for selective adsorption and colorimetric detection of phosphates in environmental water.",
      "She also served as the core-facility transmission electron microscopy (TEM) lab manager at the Joint School of Nanoscience and Nanoengineering from 2022 to 2026. She draws on extensive experience in research, teaching, and student mentoring to cultivate the next generation of materials scientists and engineers."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gayani-pathiraja-phd-8a158644/" }
    ]
  },
  {
    name: "Mary Ifeoma Nwanua, Ph.D.",
    dept: "Engineering Leadership",
    role: "Visiting Assistant Professor",
    course: "EGS 4034 · Engineering Ethics & Professionalism",
    photo: "assets/img/headshots/mary-nwanua.jpg",
    bio: "Dr. Nwanua's research focuses on developing future engineering and construction professionals and the competencies they need in an increasingly technology- and AI-enabled industry.",
    bioFull: [
      "Dr. Nwanua holds a B.Sc. in Quantity Surveying (construction cost management) and an M.Sc. in Quantity Surveying (infrastructure cost management) from Nnamdi Azikiwe University, Nigeria, and a Ph.D. in Civil Engineering from the University of Florida.",
      "Her research focuses on the development of future engineering and construction professionals, particularly the competencies needed to thrive in an increasingly technology- and AI-enabled industry. Her interests include innovative learning pedagogies, artificial intelligence, and human-robot collaboration and interaction in engineering and construction. Her doctoral research examined construction professionals' attitudes and vulnerabilities in shared workspaces with drones.",
      "Dr. Nwanua brings more than three years of construction industry experience as a cost estimator on residential, industrial, and real estate projects. She has also taught as a STEM tutor and university peer tutor in Nigeria and contributed to NSF grant-funded research at the University of Florida. Her doctoral research and strong oral communication skills earned her recognition as a Top 10 finalist in the University of Florida's 2025 Three Minute Thesis (3MT) competition."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/nwanua-mary/" }
    ]
  },
  {
    name: "Jasmine Smith, Ph.D.",
    dept: "Engineering Innovation",
    role: "Visiting Assistant Professor",
    course: "EGN 4643 · Engineering Innovation",
    photo: "assets/img/headshots/jasmine-smith.jpg",
    bio: "Dr. Smith works with students in the College of Engineering to develop innovative thinking through problem-based learning. Her research spans cognitive and social neuroscience, biomedical engineering, and engineering education.",
    bioFull: [
      "Dr. Smith holds a B.S. in Biochemistry from Mississippi State University, an M.S. in Biomedical Engineering from UF, and a Ph.D. in Engineering Education (BME focus), also from UF. She will be working with students in the College of Engineering to develop innovative thinking through problem-based learning, while collaborating with faculty and instructional leaders on evidence-based teaching practices.",
      "Her research training, spanning cognitive and social neuroscience, biomedical engineering, and engineering education, treats mentoring communication as a measurable, biologically grounded phenomenon, combining neuroimaging (e.g., fMRI, DTI), mixed-method designs, and psychometric techniques. Her interests include the neurobiological and psychophysiological correlates of communication and self-awareness in STEMM mentoring, and grounding AI reliability claims in neurobiological evidence.",
      "During her time as a graduate student at UF, she co-founded the Effective Mentoring Strategies Workshop, training STEMM graduate students and postdocs in self- and cultural-awareness, communication, and social capital. As a graduate student, she has served as a Teaching Assistant for an introductory programming course, biomedical cellular engineering lab, and research methods. As an undergraduate, she served as a Supplemental Instructional Leader for General Chemistry 2. Prior to starting this position, she served as an Academic Advisor for undergraduates in UF's Computer Engineering program."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jasminesmith97" }
    ]
  }
];
