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
    role: "Associate Instructional Professor",
    kind: "education",
    photo: "assets/img/headshots/lilianny-virguez.jpg",
    mentees: ["Logan Morton, Ph.D."],
    bio: "Dr. Virgüez designs meaningful learning experiences that prepare students for a rapidly evolving technological workforce. Her work spans engineering education, curriculum development, online learning, and artificial intelligence in education.",
    bioFull: [
      "Dr. Lilianny Virgüez is an Associate Instructional Professor in the Department of Engineering Education at the University of Florida Herbert Wertheim College of Engineering. With a Ph.D. in Engineering Education and a professional background in engineering, she is passionate about designing meaningful learning experiences and preparing students for a rapidly evolving technological workforce.",
      "Her work spans engineering education, curriculum development, online learning, and artificial intelligence in education. Her current scholarship explores how AI can serve as a cognitive partner to support student learning and metacognition, as well as how engineering curricula can better align with emerging workforce needs. She has also held academic leadership roles in undergraduate education and curriculum development, leading and contributing to curricular initiatives at the college and university levels."
    ],
    links: [
      { label: "Faculty profile", url: "https://eed.eng.ufl.edu/people/faculty/name/lilianny-virguez/" }
    ]
  },
  {
    name: "Sindia Rivera-Jiménez, Ph.D.",
    dept: "Engineering Education",
    role: "Assistant Professor",
    kind: "education",
    photo: "assets/img/headshots/sindia-rivera-jimenez.jpg",
    mentees: ["Yu Zhang, Ph.D."],
    bio: "Dr. Rivera-Jiménez studies how engineering communities enact agency in participatory and transformational change, and how professional development shapes organizational cultures and broadens engagement in engineering.",
    bioFull: [
      "Dr. Rivera-Jiménez is an assistant professor in the Department of Engineering Education and an affiliate faculty member of the Department of Chemical Engineering at the University of Florida. Her research focuses on understanding the role of engineering communities while enacting their agency in participatory and transformational change.",
      "She is particularly interested in understanding how professional development influences organizational cultures and promotes wider engagement in engineering. As an education practitioner, she also explores evidence-based practices to integrate teamwork, ethical awareness, and effective collaboration into the curriculum.",
      "Dr. Rivera-Jiménez graduated from the University of Puerto Rico at Mayagüez with a B.S. and Ph.D. in Chemical Engineering. She earned an NSF RIEF award recognizing her effort in transitioning from a meaningful ten-year teaching faculty career into engineering education research. Before her current role, she taught STEM courses at many institutions, including Hispanic-serving institutions (HSIs), community colleges, and R1 public universities."
    ],
    links: [
      { label: "Faculty profile", url: "https://eed.eng.ufl.edu/people/faculty/name/sindia-rivera-jimenez/" }
    ]
  },
  {
    name: "Andrea Ramirez-Salgado, Ph.D.",
    dept: "Engineering Education",
    role: "Lead for Convergent Engineering Education Initiatives & Instructional Assistant Professor",
    kind: "education",
    photo: "assets/img/headshots/andrea-ramirez-salgado.jpg",
    mentees: ["Mary Ifeoma Nwanua, Ph.D."],
    bio: "Dr. Ramirez-Salgado holds degrees in Computer Science Engineering and Educational Technologies, and designs meaningful, engaging learning experiences for all students, including those with diverse learning needs.",
    bioFull: [
      "Andrea Ramirez-Salgado is an instructional assistant professor in the Department of Engineering Education at the University of Florida Herbert Wertheim College of Engineering. With degrees in Computer Science Engineering and Educational Technologies, she strives to create meaningful and engaging learning experiences for all students, including those with diverse learning needs.",
      "She has over 15 years of experience teaching in higher education, including courses on artificial intelligence, data science, algorithms, data structures, software engineering, and educational technologies. She is currently part of an NSF-funded grant team developing hands-on, gamified, and equity-based AI curricula."
    ],
    links: [
      { label: "Faculty profile", url: "https://eed.eng.ufl.edu/people/faculty/name/andrea-ramirez-salgado/" }
    ]
  },
  {
    name: "Juan Gilbert, Ph.D.",
    dept: "Engineering Education",
    role: "The Andrew Banks Family Preeminence Endowed Professor",
    kind: "education",
    photo: "assets/img/headshots/juan-gilbert.jpg",
    mentees: ["Jasmine Smith, Ph.D."],
    bio: "Dr. Gilbert leads the Computing for Social Good Lab and was named a laureate of the National Medal of Technology and Innovation for pioneering universal design in elections technology.",
    bioFull: [
      "Dr. Gilbert is The Andrew Banks Family Preeminence Endowed Professor at the University of Florida, where he leads the Computing for Social Good Lab. He has research projects in election security, usability, and accessibility; advanced learning technologies; human-centered AI and machine learning; and ethnocomputing (culturally relevant computing).",
      "He is the inventor of Prime III, an open-source, secure, and accessible voting technology, and the first open-source voting system to be used in state, local, and federal elections in the U.S.A. Gilbert was named a laureate of the National Medal of Technology and Innovation by President Joe Biden for pioneering and championing universal design in elections technology to make voting accessible for everyone and increasing diversity in the computer science workforce.",
      "Gilbert is a Fellow of the Association for Computing Machinery (ACM), a Fellow of the American Association for the Advancement of Science (AAAS), a Fellow of the IEEE, and a Fellow of the National Academy of Inventors (NAI)."
    ],
    links: [
      { label: "Faculty profile", url: "https://eed.eng.ufl.edu/people/faculty/name/juan-gilbert/" }
    ]
  },
  {
    name: "Laura Melissa Cruz Castro, Ph.D.",
    dept: "Engineering Education",
    role: "Instructional Assistant Professor",
    kind: "domain",
    photo: "assets/img/headshots/laura-cruz-castro.png",
    mentees: ["Bárbara Fagundes, Ph.D."],
    bio: "Dr. Cruz Castro's work focuses on engineering education, student success, and expanding opportunities for underrepresented students in STEM.",
    bioFull: [
      "Dr. Laura Cruz Castro is a faculty member at the University of Florida whose work focuses on engineering education, student success, and expanding opportunities for underrepresented students in STEM.",
      "Through her teaching and mentorship, she is dedicated to supporting the academic and professional development of engineering students and fostering inclusive learning environments."
    ],
    links: [
      { label: "Faculty profile", url: "https://eed.eng.ufl.edu/people/faculty/name/laura-cruz-castro/" }
    ]
  },
  {
    name: "Dmitry Kopelevich, Ph.D.",
    dept: "Chemical Engineering",
    role: "Associate Chair for Undergraduate Studies & Instructional Professor, Harry and Bertha Bernstein Professor",
    kind: "domain",
    photo: "assets/img/headshots/dmitry-kopelevich.png",
    mentees: ["Yu Zhang, Ph.D."],
    bio: "Dr. Kopelevich's research is a theoretical and computational investigation of transport phenomena and non-equilibrium processes in nano- and microscale systems, using molecular and Brownian dynamics alongside analytical tools.",
    bioFull: [
      "Dr. Kopelevich's research focuses on theoretical and computational investigation of transport phenomena and non-equilibrium processes in nano- and microscale systems. His group applies simulation methods such as molecular and Brownian dynamics, as well as theoretical tools, to systems whose understanding is of significant scientific and technological importance.",
      "In self-assembled surfactant systems, amphiphilic molecules containing both hydrophobic and hydrophilic segments spontaneously assemble in aqueous solution into microstructures used as drug delivery vehicles and as templates for advanced nanostructured materials. Similar structures, such as lipid bilayers, are building blocks of biological systems. Because the dynamics of self-assembly and the transitions between structures matter in all of these settings, his group works to understand the molecular mechanisms behind them — in particular the formation and break-up of micelles and the dynamics of lipid membranes.",
      "A second line of work examines DNA transport in microfluidic devices, which enable efficient and inexpensive analysis and processing of macromolecules for biomedical applications. Transport and separation of polyelectrolytes such as DNA in these devices is often facilitated by an applied electric field. In collaboration with Prof. Butler, this project aims to understand the effects of electric fields and other factors on molecular transport, with a focus on developing an accurate model for electrohydrodynamic interactions in polyelectrolytes.",
      "A third project addresses non-Brownian suspensions, which have applications ranging from pharmaceutical to oil industries. When suspended particles are large enough that thermal Brownian forces are negligible, they are nevertheless observed to undergo diffusive motion. Also in collaboration with Prof. Butler, his group applies tools of statistical mechanics to investigate the fundamental mechanisms of this diffusion, and to explain counterintuitive experimental observations such as increasing particle roughness leading to lower diffusivity."
    ],
    links: [
      { label: "Faculty profile", url: "https://che.ufl.edu/people/faculty/name/dmitry-kopelevich/" }
    ]
  },
  {
    name: "Vincent “VJ” Tocco, Jr., Ph.D.",
    dept: "Chemical Engineering",
    role: "Undergraduate Program Coordinator & Instructional Assistant Professor",
    kind: "domain",
    photo: "assets/img/headshots/vincent-tocco.png",
    mentees: ["Logan Morton, Ph.D."],
    bio: "Dr. Tocco is a graduate of the UF Chemical Engineering Ph.D. program whose passion for teaching and mentoring earned him the Ray W. Fahien Graduate Teaching Award twice.",
    bioFull: [
      "Dr. Vincent Tocco, Jr., is a graduate of the UF Chemical Engineering Ph.D. program. His passion for teaching and mentoring led him to excel as a teaching assistant and mentor to undergraduates, high school students, and teachers in research, and to develop a one-semester weekly seminar aimed at new Ph.D. students. He was twice recognized with the Ray W. Fahien Graduate Teaching Award."
    ],
    links: [
      { label: "Faculty profile", url: "https://che.ufl.edu/people/faculty/name/vincent-tocco/" }
    ]
  },
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
    name: "Chris Geiger, Ph.D.",
    dept: "Biomedical Engineering",
    role: "Instructional Associate Professor & Associate Chair for Undergraduate Studies",
    kind: "domain",
    photo: "assets/img/headshots/chris-geiger.jpg",
    mentees: [
      "Bryce Shirk, Ph.D.",
      "Jessica Sena, Ph.D.",
      "Michael “Mike” Strinden, Ph.D."
    ],
    bio: "Dr. Geiger leads the department's Senior Design Program and brings 15+ years of experience in engineering design, cellular and tissue engineering, and engineering fundamentals.",
    bioFull: [
      "Dr. Geiger earned his Ph.D. in Biomedical Engineering from Northwestern University in 2003, studying under the guidance of Dr. Matt Glucksberg and Dr. Chris Waters. His doctoral research demonstrated his early dedication to advancing our understanding of critical biomedical phenomena. His academic journey also includes a Master of Science in Biomedical Engineering and a Bachelor of Science in Chemical Engineering, both from Northwestern University.",
      "As one of the founding faculty members of the Bioengineering program at Florida Gulf Coast University (FGCU), Dr. Geiger played an instrumental role in its growth and development, including the development of the initial Bioengineering curriculum and the teaching of various engineering courses. Having witnessed the continued growth and success of the UF BME program over the past 15 years, he views his appointment as a natural progression of his career, aligning with his skills and passions.",
      "Over the past 15+ years, he has nurtured a diverse range of students, bringing expertise in areas such as engineering design, cellular and tissue engineering, and engineering fundamentals.",
      "In his current capacity, Dr. Geiger spearheads the Senior Design Program, a pivotal initiative that empowers students to devise solutions to real-world challenges. This role equips them with a robust foundation in intellectual property, engineering economics, federal regulations, reimbursement principles, and business planning, positioning them for success in a dynamic engineering landscape."
    ],
    links: [
      { label: "Faculty profile", url: "https://bme.ufl.edu/people/faculty/name/chris-geiger/" }
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
  {
    name: "Nancy Ruzycki, Ph.D.",
    dept: "Materials Science & Engineering",
    role: "Instructional Associate Professor & Director of Undergraduate Laboratories",
    kind: "education",
    photo: "assets/img/headshots/nancy-ruzycki.jpg",
    mentees: ["Sophia Ahmed, Ph.D."],
    bio: "Dr. Ruzycki directs undergraduate laboratories in Materials Science & Engineering and is principal investigator on the EQuIPD grant at UF. Her research focuses on engineering education and the use of models, process maps, and systems thinking in teaching.",
    bioFull: [
      "Dr. Nancy Ruzycki is an instructional associate professor, director of undergraduate laboratories, and the principal investigator on the EQuIPD Grant at UF within the Department of Materials Science and Engineering in the Herbert Wertheim College of Engineering. She has received over 7 million dollars in funding for her work.",
      "Her research is focused on engineering education and the use of models, process maps, and system thinking in teaching. Dr. Ruzycki holds a Ph.D. in Physics from Tulane University, is a certified teacher, and holds National Board Certification in Physics. She is a “Modeler” and has trained at Florida International University for Modeling Physics."
    ],
    links: [
      { label: "Faculty profile", url: "https://mse.ufl.edu/people/name/nancy-ruzycki/" }
    ]
  },
  {
    name: "Simon R. Phillpot, Ph.D.",
    dept: "Materials Science & Engineering",
    role: "Associate Department Chair & Distinguished Professor",
    kind: "domain",
    photo: "assets/img/headshots/simon-phillpot.jpg",
    mentees: ["Gayani Pathiraja, Ph.D.", "Sophia Ahmed, Ph.D."],
    bio: "Dr. Phillpot works in computational materials science, with research spanning interfaces in materials, ferroelectrics, complex oxides, polycrystalline and nanocrystalline materials, and thermal transport.",
    bioFull: [
      "Dr. Phillpot is Associate Department Chair and a Distinguished Professor in the Department of Materials Science and Engineering at the University of Florida. His research is in computational materials science, covering interfaces in materials, ferroelectrics, complex oxides, polycrystalline and nanocrystalline materials, and thermal transport.",
      "He earned his Ph.D. from the University of Florida in 1985."
    ],
    links: [
      { label: "Faculty profile", url: "https://mse.ufl.edu/people/name/simon-phillpot/" }
    ]
  },
  {
    name: "Ira Harkness, Ph.D.",
    dept: "Materials Science & Engineering",
    role: "Nuclear Engineering Undergraduate Coordinator & Instructional Associate Professor",
    kind: "education",
    photo: "assets/img/headshots/ira-harkness.jpg",
    mentees: ["Gayani Pathiraja, Ph.D."],
    bio: "Dr. Harkness brings two decades of experience in higher education to his teaching, with expertise in computational nuclear engineering and nuclear engineering education.",
    bioFull: [
      "Ira Harkness is an Instructional Associate Professor in the Department of Materials Science and Engineering. He has two decades of experience in higher education, including managing information technology and facilities efforts at UF, and working with non-profits and community organizations to address K-12 education. His expertise is in computational nuclear engineering and nuclear engineering education.",
      "He earned his B.S. in Materials Science and Engineering from the University of Florida in 2007, then completed his M.S. in Digital Forensics from the University of Central Florida in 2011. During that time he developed forensic tools, performed verification and validation of tools, and learned how to properly handle digital evidence.",
      "He received his Ph.D. in nuclear engineering from the University of Florida in 2018 under the mentorship of Dr. Andreas Enqvist, developing safeguards approaches for spent nuclear fuel in dry cask storage. His Ph.D. was only possible with significant support from the University of Florida Employee Education Program."
    ],
    links: [
      { label: "Faculty profile", url: "https://mse.ufl.edu/people/name/ira-harkness/" },
      { label: "Personal website", url: "https://harkness.mse.ufl.edu/" }
    ]
  },
  {
    name: "Rachel Frazier, Ph.D.",
    dept: "Engineering Leadership",
    role: "Associate Professor & Gene Fraser Teaching Professor",
    kind: "domain",
    photo: "assets/img/headshots/rachel-frazier.png",
    mentees: ["Mary Ifeoma Nwanua, Ph.D."],
    bio: "Dr. Frazier teaches ethics and leadership at UF’s Engineering Leadership Institute, using experiential learning, flipped classrooms, and gamified concepts to prepare students for real-world challenges.",
    bioFull: [
      "Dr. Rachel Frazier, a three-time Gator graduate, is an educator, researcher, and entrepreneur who thrives at the intersection of innovation and ethical leadership. As a Gene Fraser Teaching Professor at the University of Florida’s Engineering Leadership Institute, she brings energy and creativity to ethics and leadership education, using experiential learning, flipped classrooms, and gamified concepts to prepare students to tackle real-world challenges.",
      "With expertise spanning materials science, entrepreneurship, and education, Dr. Frazier extends her impact beyond the classroom, contributing to research, publications, ethics competitions, professional development initiatives, non-profit boards, and community workshops to inspire collaboration and drive meaningful change."
    ],
    links: [
      { label: "Faculty profile", url: "https://www.eng.ufl.edu/leadership/about/meet-the-team/rachel-frazier/" }
    ]
  },
  {
    name: "Melissa White, Ph.D.",
    dept: "Engineering Innovation",
    role: "Senior Lecturer",
    kind: "domain",
    photo: "assets/img/headshots/melissa-white.png",
    mentees: ["Jasmine Smith, Ph.D."],
    bio: "Dr. White develops and teaches the Engineering Innovation and Engineering Entrepreneurship curriculum, working with faculty and students to build creativity, innovation, and entrepreneurship across campus and in the community.",
    bioFull: [
      "Dr. White develops and instructs the course curriculum in Engineering Innovation and Engineering Entrepreneurship for students in the Herbert Wertheim College of Engineering. She works with faculty and students to build creativity, innovation, and entrepreneurship across campus and in the community.",
      "She received her Bachelor of Science degree in Biomedical Engineering with a minor in Anthropology from the University of Miami. She then completed her Master of Science degree in Engineering, Science, Technology, and Entrepreneurship from the University of Notre Dame, and earned her doctorate in Industrial and Systems Engineering, along with a certificate in Health Systems Engineering, from North Carolina State University.",
      "Prior to joining UF, Dr. White helped co-found the non-profit Medical Innovators Collaborative (MEDIC), whose goal is to create an environment where students across the universities in the Research Triangle can collaborate with clinicians and industry partners to foster medical innovations."
    ],
    links: [
      { label: "Faculty profile", url: "https://www.eng.ufl.edu/innovation/about/meet-the-team/melissa-white/" }
    ]
  },
  {
    name: "Jad Atweh, Ph.D.",
    dept: "Industrial & Systems Engineering",
    role: "Instructional Assistant Professor & Assistant Chair for Undergraduate Research & Study Abroad",
    kind: "education",
    photo: "assets/img/headshots/jad-atweh.jpg",
    mentees: ["Bárbara Fagundes, Ph.D."],
    bio: "Dr. Atweh researches human factors and ergonomics, focusing on how teams interact with technology in high-stakes complex systems. He also conducts engineering education research and holds over ten teaching certificates.",
    bioFull: [
      "Dr. Jad Atweh is an Instructional Assistant Professor in the Department of Industrial and Systems Engineering at the University of Florida. His research focuses on human factors and ergonomics, with an emphasis on improving how teams interact with technology in high-stakes complex systems.",
      "His work combines eye tracking, nonlinear dynamical systems methods, and cognitive systems engineering to design better and smarter displays that support team coordination, situation awareness, and decision-making across complex domains such as unmanned aerial vehicle systems, driving, healthcare, and space operations.",
      "Dr. Atweh teaches undergraduate and graduate courses in human factors and ergonomics, systems design, and occupational safety. He integrates state-of-the-art teaching pedagogy into the classroom, holds over ten teaching certificates, and conducts research on engineering education to enhance student learning and engagement."
    ],
    links: [
      { label: "Faculty profile", url: "https://faculty.eng.ufl.edu/jad-atweh/" }
    ]
  }
];
