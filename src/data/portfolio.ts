import {
  Profile,
  Project,
  DesignWork,
  JourneyItem,
  CreativeFrequency,
  Certification
} from '../types/portfolio'

export type {
  Profile,
  Project,
  DesignWork,
  JourneyItem,
  CreativeFrequency,
  Certification
}

export const PROFILE: Profile = {
  name: "Soumya K.",
  fullName: "Soumya K.",
  tagline: "Creative Technologist · Computer Science",
  headline1: "A DIFFERENT",
  headline2: "STATE OF THINKING.",
  subtitle: "Creative mind. Engineering mindset.",
  bio: "I move between code, systems and visual ideas — exploring how technology can become something people actually enjoy using.",
  coreManifesto: "I DON'T JUST BUILD SOFTWARE. I CREATE, EXPLORE, EXPRESS AND EXPERIMENT.",
  aboutHeadline: "NOT ONE BOX. NEVER WAS.",
  aboutBio: "I'm a Computer Science student who enjoys exploring more than one side of technology. From backend systems and AI experiments to interface design, narrative writing and visual identity, I like understanding how things work and how they can feel better to use.",
  personalQuote: "A little code. A little chaos. A lot of curiosity.",
  secondaryQuote: "Engineering meets imagination.",
  closingQuote: "Still exploring. Still building.",
  education: {
    degree: "B.E. Computer Science and Engineering",
    institution: "Sri Venkateswara College of Engineering (SVCE)",
    location: "Pennalur, Sriperumbudur, Tamil Nadu",
    period: "2024–2028",
    academicStage: "Third year / Sixth semester",
    cgpa: "7.2 / 10.0 (Up to latest semester)",
    academicFocus: [
      "Specializing in AI/ML Applications, Scalable Backend Services, Data Systems & Distributed Architectures",
      "Active contributor across prominent campus societies: Design Lead at QCIC & CyberNova Design Team",
      "Balancing rigorous engineering coursework with hackathon project builds (SIH 2026 NEXORA & CONVERA)"
    ]
  },
  contact: {
    email: "kusoumya2006@gmail.com",
    phone: "+91 9025721679",
    linkedin: "https://www.linkedin.com/in/soumyakumar-dev/",
    github: "https://github.com/kusoumya2006-netizen",
    githubUsername: "kusoumya2006-netizen",
    resume: "/assets/Soumya_K_Resume_Updated_CONVERA(2).pdf",
    resumeAlt: "/assets/Soumya_K_Resume_Updated_CONVERA.pdf"
  },
  interests: ["Quantum Computing", "AI & Machine Learning", "UI/UX Design", "Systems Engineering", "Visual Identity"],
  humanInterests: ["Brand Building & Marketing", "Creative Writing", "Content Creation", "Music"]
};

export const PROJECTS: Project[] = [
  {
    id: "convera",
    number: "01",
    name: "CONVERA",
    shortDesc: "Integrated Institution Complaint Monitoring & Overlap Dashboard for AICTE (SIH 2026)",
    fullDesc: "A centralized institutional complaint monitoring concept designed to help analyze complaints, assess urgency and identify overlapping cases. Built for Smart India Hackathon problem statement SIH26264 under AICTE requirements.",
    problem: "Educational institutions struggle with fragmented grievance systems, leading to duplicate complaints, delayed escalations, and zero audit trails for critical institutional disputes.",
    contribution: [
      "Engineered automated complaint urgency assessment algorithm factoring severity keywords, elapsed time, and escalation tiers",
      "Developed semantic overlap detection system to group redundant tickets and prevent dual processing",
      "Created dynamic case actions pipeline and status transition resolution workflows",
      "Implemented immutable audit logging for regulatory transparency with Supabase and PostgreSQL",
      "Achieved 95/95 unit and integration tests passing in automated Vitest suite"
    ],
    tech: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "SQL Migrations", "Vitest"],
    category: ["All", "Full Stack", "Systems"],
    github: "https://github.com/kusoumya2006-netizen/CONVERA-",
    demo: null,
    metrics: "95/95 Tests Passing · SIH26264 Prototype",
    featured: true,
    accentColor: "#9AA58B"
  },
  {
    id: "nexora",
    number: "02",
    name: "NEXORA",
    shortDesc: "AI-Powered Voice-Cloning Impersonation Detection and Risk Analysis (SIH 2026)",
    fullDesc: "A modular multimodal approach to detecting and preventing voice-cloning impersonation attacks. Soumya engineered the core Conversation & Risk Analysis + Risk-Based Scoring module, analyzing verbal urgency patterns and social engineering tactics in real time.",
    problem: "Generative voice synthesis enables hyper-realistic audio deepfakes that traditional acoustic detectors fail to catch in real-time conversational social engineering scams.",
    contribution: [
      "Constructed 18 contextual rule-based conversation detectors identifying panic triggers, credential requests, and conversational pressure",
      "Engineered false-positive suppression logic for natural high-stress dialogue scenarios (emergencies, urgent family calls)",
      "Architected compound risk scoring integrating behavioral speech cues with linguistic analysis",
      "Built explainable AI risk indicators detailing why an interaction triggered security alerts",
      "Calibrated multimodal risk model weights: Voice Authenticity 30% · Speaker Verification 30% · Conversational Analysis 40%"
    ],
    tech: ["Python", "FastAPI", "NLP", "Risk Scoring", "Scikit-learn", "Speech Heuristics"],
    category: ["All", "AI & ML", "Systems"],
    github: "https://github.com/deepikakarthikeyan1810-maker/NEXORA",
    demo: null,
    metrics: "18 Behavioral Detectors · Multimodal Compound Scoring",
    featured: true,
    accentColor: "#17231F"
  },
  {
    id: "resumatch",
    number: "03",
    name: "ResuMatch AI",
    shortDesc: "Smart ATS Resume Analyzer & Interactive Visualizer with Live Deployment",
    fullDesc: "A responsive client application that compares resume content against job descriptions, presenting applicant tracking system (ATS) compatibility scores, keyword gap analyses and actionable optimization insights.",
    problem: "Job applicants send resumes blindly into ATS parsers without knowing which critical domain keywords are missing or how algorithmic systems score their experience against specific job requisitions.",
    contribution: [
      "Built resume vs job-description semantic matching algorithm with cosine similarity and TF-IDF term weighting",
      "Designed ATS-oriented compatibility scoring and high-frequency keyword breakdown counters",
      "Engineered interactive keyword gap visualizations using Recharts with categorical filters",
      "Integrated Framer Motion for smooth analytical state transitions and score gauges",
      "Deployed production build on Vercel with real-time browser-based file parsing"
    ],
    tech: ["React", "TypeScript", "Vite", "Framer Motion", "Recharts", "Tailwind CSS", "Vercel"],
    category: ["All", "AI & ML", "Full Stack", "UI/UX"],
    github: "https://github.com/kusoumya2006-netizen/ResuMatchAI",
    demo: "https://resu-match-ai-delta.vercel.app/",
    metrics: "Live on Vercel · Interactive ATS Visualizer",
    featured: true,
    accentColor: "#9AA58B"
  },
  {
    id: "vyra",
    number: "04",
    name: "VYRA",
    shortDesc: "Explainable Scam Detection Platform with Responsive React Interface",
    fullDesc: "A comprehensive workflow for analyzing suspicious messages, URLs, emails and phone numbers using NLP, machine learning and risk analysis, paired with an interpretable risk signal dashboard that highlights deceptive heuristics.",
    problem: "Users receive deceptive phishing messages and fraud vectors across multiple channels with no intuitive, instant way to assess threat levels or understand why something is malicious.",
    contribution: [
      "Trained classification models on phishing and social engineering datasets using Scikit-learn and TF-IDF vectors",
      "Implemented multi-vector ingestion pipelines for URLs, SMS, emails, and telephony indicators",
      "Designed responsive React interface highlighting flagged heuristics with explainable severity tags",
      "Integrated FastAPI backend with asynchronous heuristic evaluation and caching"
    ],
    tech: ["Python", "FastAPI", "Scikit-learn", "NLP", "React", "TypeScript", "Vite", "Tailwind CSS"],
    category: ["All", "AI & ML", "Full Stack"],
    github: "https://github.com/kusoumya2006-netizen/VYRA",
    demo: null,
    metrics: "Multi-Vector Analysis · Interpretable Risk Signals",
    featured: true,
    accentColor: "#B5B5AD"
  },
  {
    id: "netwatch",
    number: "05",
    name: "NetWatch",
    shortDesc: "Network Monitoring Application & Cloud Metrics Dashboard",
    fullDesc: "A network monitoring application featuring custom API health check endpoints, reactive web frontend, MongoDB Atlas persistence and automated telemetry collection workflows.",
    problem: "Distributed systems and local services require continuous health monitoring, latency tracking, and uptime logging without heavy enterprise monitoring software overhead.",
    contribution: [
      "Developed backend monitoring API and endpoint telemetry collectors in Node.js",
      "Connected real-time state synchronization to MongoDB Atlas for timeseries latency storage",
      "Built clean dashboard visualizing ping latency, HTTP status codes, and server uptime ratios",
      "Configured automated deployment workflows and health notification alerts"
    ],
    tech: ["Node.js", "Express", "MongoDB Atlas", "React", "REST APIs", "Tailwind CSS"],
    category: ["All", "Full Stack", "Systems"],
    github: "https://github.com/kusoumya2006-netizen/netwatch_new",
    demo: null,
    metrics: "MongoDB Atlas Cloud Persistence",
    featured: true,
    accentColor: "#17231F"
  },
  {
    id: "borderpulse",
    number: "06",
    name: "BorderPulse",
    shortDesc: "IoT Border Monitoring System with Simulated Sensors",
    fullDesc: "A border surveillance and intrusion detection prototype combining computer vision (YOLO), simulated hardware sensor telemetry (ESP32) and cloud storage.",
    problem: "Perimeter monitoring in remote zones requires low-latency alerting combining both visual object detection and physical sensor triggers.",
    contribution: [
      "Configured YOLO object detection for perimeter intrusion recognition",
      "Simulated ESP32 IoT sensor feeds and telemetry streaming",
      "Built FastAPI ingestion service connected to Supabase"
    ],
    tech: ["YOLO", "Python", "FastAPI", "Supabase", "ESP32 (Simulated)"],
    category: ["All", "IoT", "AI & ML"],
    github: null,
    demo: null,
    metrics: "Hardware & Vision Prototype",
    featured: false,
    accentColor: "#9AA58B"
  },
  {
    id: "amuseme",
    number: "07",
    name: "AmuseMe Park",
    shortDesc: "Amusement Park Ticket Booking & Reservation Platform",
    fullDesc: "A responsive ticket reservation web application with real-time pass selection, schedule management and Firebase authentication/database integration.",
    problem: "Theme park visitors need effortless mobile booking with instant pass validation and clear ticket tier breakdowns.",
    contribution: [
      "Built component-based UI for attraction ticket selection",
      "Integrated Firebase Authentication and Firestore data models",
      "Designed clean checkout and booking summary flow"
    ],
    tech: ["React", "Firebase", "Tailwind CSS"],
    category: ["All", "Full Stack", "UI/UX"],
    github: null,
    demo: null,
    metrics: "Responsive Booking UI",
    featured: false,
    accentColor: "#B5B5AD"
  },
  {
    id: "library",
    number: "08",
    name: "Smart Library Management",
    shortDesc: "High-Performance Systems Catalog in C++",
    fullDesc: "A classic C++ library management application utilizing efficient data structures and file I/O for book indexing, patron tracking and borrow transactions.",
    problem: "Managing catalog inventory and rapid search requires fundamental algorithmic precision without heavy runtime overhead.",
    contribution: [
      "Implemented custom data structures for book records and indexing",
      "Structured fast search, issuance and return workflows",
      "Handled persistent file serialization"
    ],
    tech: ["C++", "Data Structures", "File I/O"],
    category: ["All", "Systems"],
    github: null,
    demo: null,
    metrics: "C++ Core Algorithms",
    featured: false,
    accentColor: "#D8D0BD"
  },
  {
    id: "cropweed",
    number: "09",
    name: "Crop & Weed Detection",
    shortDesc: "Computer Vision & Agricultural Precision Prototype",
    fullDesc: "A computer-vision and machine learning prototype exploring morphological differentiation between crops and invasive weeds to support precision agricultural workflows.",
    problem: "Automated weed management requires distinguishing seedlings with subtle structural differences in variable field conditions.",
    contribution: [
      "Applied image preprocessing and feature extraction techniques",
      "Explored ML classifiers and YOLO object bounding models",
      "Analyzed visual segmentation for field camera prototypes"
    ],
    tech: ["Python", "Computer Vision", "Machine Learning", "YOLO"],
    category: ["All", "AI & ML"],
    github: null,
    demo: null,
    metrics: "Agricultural Vision Experiment",
    featured: false,
    accentColor: "#9AA58B"
  }
];

// NOTE: "Finding Club Logo" is completely removed per user instruction.
// All 5 designs use the real user-uploaded Canva artwork images directly.
export const DESIGN_WORKS: DesignWork[] = [
  {
    id: "offscript",
    modNumber: "MOD-01",
    number: "01",
    name: "OFFSCRIPT — Creator Brand Identity",
    role: "Brand Identity & Visual Designer",
    clientOrOrg: "Independent Creator Media Brand",
    shortDesc: "Bold, unfiltered media brand identity centered on pop culture, music, internet trends, and authentic voice.",
    fullDesc: "OFFSCRIPT is a creator-oriented media brand built around pop culture, internet trends, music, fashion, and unfiltered opinions. Designed with a bold, unfiltered, expressive, youthful, experimental, and rebellious personality. The visual identity features oversized condensed black typography set against a warm ivory canvas, vibrant hot-pink graphic elements, flowing purple organic shapes, an expressive illustrated orangutan character with vivid orange hair, and high-contrast orange-red typography panels. Guided by the core brand message: 'BREAK THE FORMAT. NOT YOUR VOICE.'",
    category: "Creator Brand Identity",
    categoryTags: ["Creator Brand", "Digital Media", "Visual Identity", "Editorial Typography", "Character Design"],
    year: "2026",
    pages: "Brand System & Posters",
    tools: "Vector Typography · Digital Illustration · Editorial Pacing",
    thumbnail: "/images/designs/offscript/poster.jpg",
    aspectRatio: "aspect-square",
    viewUrl: null,
    editUrl: null,
    isIdentity: true,
    accentColor: "#FF007A",
    brandMessage: "BREAK THE FORMAT. NOT YOUR VOICE.",
    gallery: [
      { label: "Main Brand Poster & Character", url: "/images/designs/offscript/poster.jpg" },
      { label: "Condensed Wordmark", url: "/images/designs/offscript/wordmark.png" },
      { label: "OS Lightning Monogram", url: "/images/designs/offscript/monogram.png" }
    ]
  },
  {
    id: "velora",
    modNumber: "MOD-02",
    number: "02",
    name: "VÉLORA — FORM / 001 Daily Skin Serum",
    role: "Brand Identity & Art Director",
    clientOrOrg: "Self-Initiated Conceptual Skincare Project",
    shortDesc: "Conceptual premium skincare identity and packaging built around intentional skincare, refined simplicity, and product-focused visual communication.",
    fullDesc: "VÉLORA is a self-initiated conceptual premium skincare brand built around intentional skincare, refined simplicity, and product-focused visual communication (conceptual branding project, not a commissioned client project or launched product). The visual identity features a deep black aesthetic, warm champagne and ivory typography, brushed beige-gold accents, oversized FORM headline typography, a minimal VÉLORA wordmark with geometric monogram insignia, and dramatic glass serum bottle imagery. Guided by the campaign message: 'SKIN, WITHOUT THE NOISE.' and supporting philosophy 'LESS ROUTINE. MORE INTENTION.'",
    category: "Beauty & Skincare Identity",
    categoryTags: ["Conceptual Branding", "Skincare Packaging", "Minimalist Luxury", "Art Direction", "FORM / 001"],
    year: "2026",
    pages: "Packaging & Campaign Poster",
    tools: "3D Product Visualization · Minimalist Typography · Packaging Layout",
    thumbnail: "/images/designs/velora/poster.jpg",
    aspectRatio: "aspect-[4/5]",
    viewUrl: null,
    editUrl: null,
    isIdentity: true,
    accentColor: "#9AA58B",
    brandMessage: "SKIN, WITHOUT THE NOISE. — LESS ROUTINE. MORE INTENTION.",
    gallery: [
      { label: "FORM / 001 Daily Serum Campaign Poster", url: "/images/designs/velora/poster.jpg" },
      { label: "VÉLORA Minimalist Monogram & Wordmark", url: "/images/designs/velora/logo.png" }
    ]
  },
  {
    id: "mission-find-nemo",
    modNumber: "MOD-03",
    number: "03",
    name: "Mission: Find Nemo — The Tech Quest",
    role: "Design Team Member",
    clientOrOrg: "AIT × CyberNova · Dept. of Information Technology, SVCE",
    shortDesc: "Cyber-aquatic campaign poster for a multi-level campus-wide online technical quest.",
    fullDesc: "A high-impact event campaign poster created for 'Mission: Find Nemo — The Tech Quest' on 11th September 2026, co-hosted by the Department of Information Technology (AIT × CyberNova) at SVCE. Designed with deep-sea cybernetic portal visuals, vibrant contrast typography hierarchy, level breakdowns for 2nd and 3rd year engineering students, and direct QR code registration integration.",
    category: "Event & Tech Campaigns",
    categoryTags: ["Event Campaign", "Tech Quest", "AIT × CyberNova", "SVCE IT", "5 Pages Campaign"],
    year: "2026",
    pages: "5 Pages Campaign",
    tools: "Canva · Digital Poster Art",
    thumbnail: "/assets/design/mission-find-nemo.jpg",
    aspectRatio: "aspect-[4/5]",
    viewUrl: "https://www.canva.com/d/pZC2CDsxvDjIXhy",
    editUrl: "https://www.canva.com/d/OlqINJKDCVSN9IJ",
    isIdentity: false,
    accentColor: "#17231F"
  },
  {
    id: "sttp-certificate",
    modNumber: "MOD-04",
    number: "04",
    name: "STTP on Quantum ML — Certificate of Appreciation",
    role: "Lead Designer",
    clientOrOrg: "QCIC & Dept. of CSE, SVCE",
    shortDesc: "Official institutional certificate series for the Five-Day STTP on Quantum Machine Learning.",
    fullDesc: "Prestige certificate of appreciation series designed for the five-day Short Term Training Program on 'Quantum Machine Learning: Algorithms, Applications and Hands-on Exploration' (September 14–18, 2026), presented to Faculty Coordinators and participating scholars. Features refined guilloche-inspired organic curves, deep emerald and champagne gold accents, formal signatory lines, and multi-institutional accreditation emblems (NBA, NAAC, NIRF, AICTE, IIC, SVCE).",
    category: "Certificates & Institutional",
    categoryTags: ["Certificate Series", "STTP Quantum ML", "Dept. of CSE", "SVCE", "11 Recipients"],
    year: "2026",
    pages: "11 Pages Series",
    tools: "Canva · Typography & Vector",
    thumbnail: "/assets/design/sttp-certificate.jpg",
    aspectRatio: "aspect-[4/3]",
    viewUrl: "https://www.canva.com/d/9vAmhFPo94mhx6Q",
    editUrl: "https://www.canva.com/d/P01_Ld5ksa7bHhD",
    isIdentity: false,
    accentColor: "#B5B5AD"
  },
  {
    id: "gandhi-jayanti",
    modNumber: "MOD-05",
    number: "05",
    name: "Gandhi Jayanti Commemorative Series",
    role: "Visual Designer",
    clientOrOrg: "CyberNova × SVCE",
    shortDesc: "Commemorative editorial collage design honoring Truth, Peace, and Non-Violence.",
    fullDesc: "An institutional commemorative design series honoring the legacy of Mahatma Gandhi, published by CyberNova at SVCE. Crafted with a vintage textured paper aesthetic, historical march photography, subtle botanical accents, torn paper border fragments, and dignified typography centered on 'Truth · Peace · Non-Violence'.",
    category: "Social & Commemorative",
    categoryTags: ["Commemorative", "CyberNova SVCE", "Editorial Collage", "Social Media", "3 Pages"],
    year: "2026",
    pages: "3 Pages Series",
    tools: "Canva · Mixed Media Collage",
    thumbnail: "/assets/design/gandhi-jayanti.jpg",
    aspectRatio: "aspect-[4/5]",
    viewUrl: "https://www.canva.com/d/ALE1ZyGTWRyw0D5",
    editUrl: "https://www.canva.com/d/_5BUn1njs3GTo-d",
    isIdentity: false,
    accentColor: "#9AA58B"
  }
];

export const JOURNEY = [
  {
    id: "uiux-intern",
    year: "2025",
    period: "2025",
    title: "UI/UX Design Intern",
    org: "Design Internship",
    type: "internship",
    details: "Worked on UI/UX tasks and interface prototypes using Figma and Canva, applying user-centred design and usability principles. Collaborated with team members, communicated progress and discussed implementation issues.",
    tags: ["Internship", "UI/UX", "Figma", "Canva", "User-Centred Design"]
  },
  {
    id: "sivasakthi",
    year: "2025",
    period: "8–19 December 2025",
    title: "Software Engineering Intern",
    org: "Sivasakthi Software Services",
    type: "internship",
    details: "An offline two-week software internship gaining practical insight into commercial software development, code workflows and team delivery.",
    tags: ["Software", "Internship", "Offline", "2 Weeks"]
  },
  {
    id: "qcic",
    year: "2026",
    period: "2026–27",
    title: "Design Lead",
    org: "Quantum Computing and Intelligence Club (QCIC)",
    type: "leadership",
    details: "Lead design direction for QCIC. Created the official club logo and monolithic silver visual identity, the core team leadership announcement concept materials, and the STTP on Quantum Machine Learning certificate series. Actively explore quantum algorithms, hybrid quantum-classical workflows, and QML research alongside computing club members.",
    tags: ["Design Lead", "Logo Design", "Brand Identity", "Quantum Computing", "SVCE Leadership"]
  },
  {
    id: "cybernova",
    year: "2026",
    period: "September 2026",
    title: "Design Team Member",
    org: "CyberNova",
    type: "club",
    details: "Active design contributor for CyberNova student society at SVCE. Designed the 5-page 'Mission: Find Nemo — The Tech Quest' campaign creatives in collaboration with the Department of Information Technology (AIT) and commemorative editorial series including Gandhi Jayanti.",
    tags: ["Design", "CyberNova", "Event Campaign", "Tech Quest", "SVCE IT"]
  },
  {
    id: "sih-2026",
    year: "2026",
    period: "2026",
    title: "Hackathon Project Contributor",
    org: "Smart India Hackathon (SIH 2026)",
    type: "hackathon",
    details: "Contributed key engineering modules across two SIH projects: CONVERA (urgency assessment & overlap detection, SIH26264) and NEXORA (conversation risk analysis & 18 rule-based detectors, SIH22104).",
    tags: ["SIH 2026", "CONVERA", "NEXORA", "Voice Cloning", "FastAPI"]
  },
  {
    id: "alumni-meet",
    year: "2026",
    period: "2026",
    title: "Campus Volunteer",
    org: "Alumni Meet — SVCE",
    type: "volunteer",
    details: "Assisted in campus coordination and guest facilitation for the institutional Alumni Meet.",
    tags: ["Volunteer", "SVCE", "Campus"]
  },
  {
    id: "forese",
    year: "2026",
    period: "2026",
    title: "Event Volunteer",
    org: "FORESE Mock Interview",
    type: "volunteer",
    details: "Volunteered for mock interview logistics and student orientation at FORESE.",
    tags: ["Volunteer", "FORESE", "Campus"]
  }
];

export const CREATIVE_FREQUENCIES: CreativeFrequency[] = [
  {
    id: "brand-building",
    dimensionNumber: "01",
    title: "Brand Building & Marketing",
    tag: "SIGNATURE CREATIVE FOCUS",
    summary: "Exploring brand identity, positioning, visual language, creative direction, audience engagement, and marketing strategies.",
    details: "I love exploring how intentional brand identities and strategic visual systems give organizations a distinct soul. From defining core positioning and tone of voice to crafting cohesive color systems and typography, I approach branding as the ultimate fusion of psychology, visual art, and communication strategy.",
    bullets: [
      "Defining core brand positioning, values, and distinct tone of voice that set projects apart",
      "Designing unified visual languages across logos, typography, color palettes, and digital touchpoints",
      "Directing creative concepts that turn abstract ideas into recognizable, memorable visual identities",
      "Studying audience engagement patterns and creative communication strategies"
    ],
    iconName: "Palette",
    featured: true
  },
  {
    id: "creative-writing",
    dimensionNumber: "02",
    title: "Creative Writing",
    tag: "NARRATIVE & EXPRESSION",
    summary: "Personal expression through writing, storytelling, ideas, and words.",
    details: "Writing is my medium for clarifying thoughts, deconstructing complex ideas, and exploring personal perspectives. Whether drafting essays, reflective notes, or conceptual stories, I care deeply about phrasing, rhythm, and finding evocative words that make readers pause and think.",
    bullets: [
      "Expressing personal perspectives, essays, and reflective thoughts on technology, culture, and human systems",
      "Deconstructing complex algorithmic topics into clear, humane, and resonant written narratives",
      "Focusing on editorial cadence, voice, and finding the exact right word to make ideas memorable"
    ],
    iconName: "PenTool"
  },
  {
    id: "content-creation",
    dimensionNumber: "03",
    title: "Content Creation",
    tag: "DIGITAL STORYTELLING",
    summary: "Developing content, creative concepts, digital storytelling, and engaging visual narratives.",
    details: "I experiment with creative concepts, visual storytelling, and digital formats that bridge the gap between imagination and audience connection. It is about understanding what catches attention authentically, structuring compelling narratives, and designing engaging editorial presentations.",
    bullets: [
      "Brainstorming and developing creative concepts and digital content formats from seed ideas to final layouts",
      "Structuring visual narratives with intentional editorial hierarchy, typographic rhythm, and visual interest",
      "Exploring digital storytelling methods that authentically inform, captivate, and connect with technical communities"
    ],
    iconName: "Video"
  },
  {
    id: "music",
    dimensionNumber: "04",
    title: "Music",
    tag: "PERSONAL PASSION & INSPIRATION",
    summary: "A personal hobby and continuous source of creative inspiration, mood, and rhythm.",
    details: "Music is an indispensable creative sanctuary and personal companion. Rather than background noise, listening to music across diverse genres sets the rhythm for late-night thinking, sparks unexpected design ideas, and provides acoustic focus for deep work.",
    bullets: [
      "A personal hobby and lifelong passion exploring diverse musical styles, instruments, and moods",
      "An endless reservoir of creative energy that sparks visual ideas and sets the rhythm for thinking",
      "Acoustic atmosphere that fuels intense creative sprints and thoughtful contemplation"
    ],
    iconName: "Headphones"
  }
];

export const SKILLS = {
  programming: ["Python", "Java", "C", "C++", "SQL"],
  webFrontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Vite", "Tailwind CSS"],
  backendDatabases: ["FastAPI", "Node.js", "Express", "REST APIs", "MongoDB", "MongoDB Atlas", "Firebase", "Supabase", "PostgreSQL", "MySQL"],
  aiData: ["Machine Learning", "NLP", "Computer Vision", "YOLO", "NumPy", "Pandas", "Scikit-learn"],
  tools: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Figma", "Canva"],
  coreCS: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks"],
  softSkills: ["Problem-solving", "Teamwork", "Communication", "Adaptability", "Time Management"],
  researchInterests: ["Quantum Computing", "Quantum Machine Learning", "Quantum Optimisation", "Hybrid Quantum-Classical Workflows"]
};

export const CERTIFICATIONS = [
  {
    name: "Meta Back-End Developer Professional Certificate",
    provider: "Coursera",
    date: "26 June 2026",
    credentialId: "QWG950DL9HX1",
    badge: "Professional"
  },
  {
    name: "Web Development Fundamentals",
    provider: "IBM",
    date: "Verified",
    credentialId: null,
    badge: "Foundation"
  },
  {
    name: "MongoDB Schema Design Optimization",
    provider: "MongoDB",
    date: "Verified",
    credentialId: null,
    badge: "Database"
  },
  {
    name: "Generative AI: Prompt Engineering",
    provider: "Coursera",
    date: "Verified",
    credentialId: null,
    badge: "AI & ML"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "SIH 2026 Internal Hackathon Project Contribution",
    project: "NEXORA — Voice-Cloning Impersonation Detection",
    details: "Developed the conversation risk scoring pipeline with 18 rule-based heuristics and false-positive suppression."
  },
  {
    title: "ResuMatch AI — Deployed Live Project",
    project: "resu-match-ai-delta.vercel.app",
    details: "Built and deployed an active ATS resume analysis web tool with interactive Recharts data visualizations."
  }
];
