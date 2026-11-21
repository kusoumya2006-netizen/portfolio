export const PROFILE = {
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
  humanInterests: ["Writing & Content", "Brand Creation", "Assisting & Volunteering", "Music", "Visual Exploration", "Emerging Tech"]
};

export interface Project {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  problem: string;
  contribution: string[];
  tech: string[];
  category: string[];
  github?: string | null;
  demo?: string | null;
  metrics?: string;
  featured: boolean;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: "convera",
    number: "01",
    name: "CONVERA",
    shortDesc: "Integrated Institution Complaint Monitoring & Overlap Dashboard for AICTE",
    fullDesc: "A centralized institutional complaint monitoring concept designed to help analyze complaints, assess urgency and identify overlapping cases. Built for Smart India Hackathon problem statement SIH26264.",
    problem: "Educational institutions struggle with fragmented grievance systems, leading to duplicate complaints, delayed escalations, and zero audit trails for critical institutional disputes.",
    contribution: [
      "Engineered automated complaint urgency assessment algorithm",
      "Developed semantic overlap detection system to group redundant tickets",
      "Created dynamic case actions pipeline and resolution workflows",
      "Implemented immutable audit logging for regulatory transparency",
      "Achieved 95/95 unit and integration tests passing in automated suite"
    ],
    tech: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "SQL Migrations"],
    category: ["All", "Full Stack", "Systems"],
    github: "https://github.com/kusoumya2006-netizen/CONVERA-",
    demo: null,
    metrics: "95/95 Tests Passing · Production Build Verified",
    featured: true,
    accentColor: "#9AA58B"
  },
  {
    id: "nexora",
    number: "02",
    name: "NEXORA",
    shortDesc: "AI-Powered Voice-Cloning Impersonation Detection and Risk Analysis",
    fullDesc: "A modular multimodal approach to detecting and preventing voice-cloning impersonation attacks. Soumya engineered the core Conversation & Risk Analysis + Risk-Based Scoring module.",
    problem: "Generative voice synthesis enables hyper-realistic audio deepfakes that traditional acoustic detectors fail to catch in real-time conversational social engineering scams.",
    contribution: [
      "Constructed 18 contextual rule-based conversation detectors",
      "Engineered false-positive suppression logic for natural high-stress dialogue",
      "Architected compound risk scoring integrating behavioral speech cues",
      "Built explainable AI risk indicators detailing why an interaction triggered alerts",
      "Calibrated multimodal risk model weights: Voice 30% · Speaker 30% · Conversation 40%"
    ],
    tech: ["Python", "FastAPI", "NLP", "Risk Scoring", "Scikit-learn"],
    category: ["All", "AI & ML", "Systems"],
    github: "https://github.com/deepikakarthikeyan1810-maker/NEXORA",
    demo: null,
    metrics: "SIH 2026 Project Contribution · Voice 30% · Speaker 30% · Conversation 40%",
    featured: true,
    accentColor: "#17231F"
  },
  {
    id: "resumatch",
    number: "03",
    name: "ResuMatch AI",
    shortDesc: "Smart ATS Resume Analyzer & Interactive Visualizer",
    fullDesc: "A responsive application that compares resumes with job descriptions, presenting applicant tracking system (ATS) compatibility scores, keyword gap analyses and actionable resume insights.",
    problem: "Job applicants send resumes blindly into ATS systems without knowing which critical domain keywords are missing or how algorithmic parsers evaluate their experience.",
    contribution: [
      "Built resume vs job-description semantic matching algorithm",
      "Designed ATS-oriented compatibility scoring and frequency counters",
      "Engineered interactive keyword gap visualizations using Recharts",
      "Integrated Framer Motion for smooth analytical state transitions",
      "Deployed production build on Vercel with real-time feedback"
    ],
    tech: ["React", "Vite", "Framer Motion", "Recharts", "Tailwind CSS"],
    category: ["All", "AI & ML", "Full Stack", "UI/UX"],
    github: "https://github.com/kusoumya2006-netizen/ResuMatchAI",
    demo: "https://resu-match-ai-delta.vercel.app/",
    metrics: "Deployed Live Project · Interactive Visualizations",
    featured: true,
    accentColor: "#9AA58B"
  },
  {
    id: "vyra",
    number: "04",
    name: "VYRA",
    shortDesc: "Explainable Scam Detection Platform with Responsive React Interface",
    fullDesc: "A workflow for analyzing suspicious messages, URLs, emails and phone numbers using NLP, machine learning and risk analysis, paired with an interpretable risk signal dashboard.",
    problem: "Users receive deceptive phishing messages and fraud vectors across multiple channels with no intuitive, instant way to assess threat levels or understand why something is malicious.",
    contribution: [
      "Trained classification models on phishing datasets using Scikit-learn",
      "Implemented multi-vector ingestion (URLs, SMS, emails, phone numbers)",
      "Designed responsive React interface highlighting flagged heuristics",
      "Integrated FastAPI backend with asynchronous heuristic pipelines"
    ],
    tech: ["Python", "FastAPI", "Scikit-learn", "NLP", "React", "TypeScript", "Vite"],
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
    fullDesc: "A network monitoring application featuring custom API endpoints, reactive web frontend, MongoDB Atlas persistence and automated deployment workflows.",
    problem: "Distributed systems and local services require continuous health monitoring and uptime logging without heavy enterprise monitoring overhead.",
    contribution: [
      "Developed backend monitoring API and endpoint telemetry collectors",
      "Connected real-time state synchronization to MongoDB Atlas",
      "Built clean dashboard visualizing ping, status codes and response latencies",
      "Configured automated deployment workflows"
    ],
    tech: ["API Development", "Web Frontend", "MongoDB Atlas", "Node.js"],
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

export interface DesignWork {
  id: string;
  modNumber: string;
  number: string;
  name: string;
  role: string;
  clientOrOrg: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  categoryTags: string[];
  year: string;
  pages?: string;
  tools: string;
  thumbnail: string;
  aspectRatio: string;
  viewUrl: string | null;
  editUrl: string | null;
  isIdentity: boolean;
  accentColor: string;
}

// NOTE: "Finding Club Logo" is completely removed per user instruction.
// All 5 designs use the real user-uploaded Canva artwork images directly.
export const DESIGN_WORKS: DesignWork[] = [
  {
    id: "qcic-core-team",
    modNumber: "MOD-01",
    number: "01",
    name: "QCIC Core Team 2026–27 Announcement Series",
    role: "Design Lead",
    clientOrOrg: "Quantum Computing and Intelligence Club · SVCE",
    shortDesc: "Official Core Team 2K26–2K27 leadership announcement campaign with deep-pine editorial typography.",
    fullDesc: "A nine-page official core team announcement series designed for the Quantum Computing and Intelligence Club (QCIC) at SVCE. Spanning the Computing Team, Machine Learning Team, Marketing & Design Team, and Security & Encoding Team with bold condensed headline typography, fine orbital geometry, and the club ethos: 'The Next State of Thinking — Ideas, Algorithms, Real Impact'.",
    category: "Editorial & Announcements",
    categoryTags: ["Editorial Design", "Team Announcement", "Leadership", "9 Pages", "QCIC SVCE"],
    year: "2026",
    pages: "9 Pages",
    tools: "Canva",
    thumbnail: "/assets/design/qcic-core-team.jpg",
    aspectRatio: "aspect-[4/5]",
    viewUrl: "https://www.canva.com/d/UA2Zp7ceAVOzJt-",
    editUrl: "https://www.canva.com/d/23ua_hHmKNw1dJX",
    isIdentity: false,
    accentColor: "#9AA58B"
  },
  {
    id: "qcic-logo",
    modNumber: "MOD-02",
    number: "02",
    name: "Official QCIC Brand Identity & Logo",
    role: "Design Lead",
    clientOrOrg: "Quantum Computing and Intelligence Club (QCIC)",
    shortDesc: "Visual identity for the Quantum Computing and Intelligence Club — a monochromatic silver identity inspired by quantum waveforms, computational intelligence and interconnected systems.",
    fullDesc: "Visual identity for the Quantum Computing and Intelligence Club — a monochromatic silver identity inspired by quantum waveforms, computational intelligence and interconnected systems. Crafted as a standalone brand identity project by Soumya K. in her capacity as Design Lead at QCIC, completely separate from event announcements. Features the authentic monochrome silver artwork: continuous 3D quantum ribbon waveform crossing a circular orbital sphere, paired with official club typography 'QUANTUM COMPUTING INTELLIGENCE CLUB — EXPLORE · CREATE · TRANSFORM'.",
    category: "Brand Identity & Insignia",
    categoryTags: ["Official Logo", "Brand Identity", "Monochrome Silver", "Quantum Waveform", "Design Lead QCIC"],
    year: "2026",
    tools: "Canva · Vector Tools",
    thumbnail: "/assets/design/qcic-logo.jpg",
    aspectRatio: "aspect-[5/4]",
    viewUrl: "https://canva.link/jt46qm6apzz2xht",
    editUrl: "https://canva.link/jt46qm6apzz2xht",
    isIdentity: true,
    accentColor: "#9AA58B"
  },
  {
    id: "mission-find-nemo",
    modNumber: "MOD-03",
    number: "03",
    name: "Mission: Find Nemo — The Tech Quest",
    role: "Design Team Member",
    clientOrOrg: "AIT × CyberNova · Dept. of Information Technology, SVCE",
    shortDesc: "Cyber-aquatic campaign poster for a multi-level campus-wide online technical quest.",
    fullDesc: "A high-impact event campaign poster created for 'Mission: Find Nemo — The Tech Quest' on 11th September 2026, co-hosted by the Department of Information Technology (AIT × CyberNova) at SVCE. Designed with deep-sea cybernetic portal visuals, neon orange typography hierarchy, level breakdowns, and direct QR registration integration.",
    category: "Event & Tech Campaigns",
    categoryTags: ["Event Campaign", "Tech Quest", "AIT × CyberNova", "SVCE IT"],
    year: "2026",
    pages: "5 Pages",
    tools: "Canva",
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
    shortDesc: "Official institutional certificate for the Five-Day STTP on Quantum Machine Learning.",
    fullDesc: "Prestige certificate of appreciation series designed for the five-day Short Term Training Program on 'Quantum Machine Learning: Algorithms, Applications and Hands-on Exploration' (September 14–18, 2026), presented to Faculty Coordinators and participating scholars. Features refined guilloche-inspired organic curves, deep emerald and champagne gold accents, and multi-institutional accreditation emblems (NBA, NAAC, NIRF, AICTE, IIC, SVCE).",
    category: "Certificates & Institutional",
    categoryTags: ["Certificate Series", "STTP Quantum ML", "Dept. of CSE", "SVCE"],
    year: "2026",
    pages: "11 Pages",
    tools: "Canva",
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
    shortDesc: "Commemorative collage design honoring Truth, Peace, and Non-Violence.",
    fullDesc: "An institutional commemorative design series honoring the legacy of Mahatma Gandhi, published by CyberNova at SVCE. Crafted with a vintage textured paper aesthetic, historical march photography, subtle botanicals, filmstrip border fragments, and dignified typography centered on 'Truth · Peace · Non-Violence'.",
    category: "Social & Commemorative",
    categoryTags: ["Commemorative", "CyberNova SVCE", "Editorial Collage", "Social Media"],
    year: "2026",
    pages: "3 Pages",
    tools: "Canva",
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
    details: "Lead design direction for QCIC. Created the official club logo, overall visual identity, and core team announcement creatives. Active interest in quantum computing, quantum machine learning, and technological experimentation.",
    tags: ["Design Lead", "Logo Design", "Brand Identity", "Quantum Computing"]
  },
  {
    id: "cybernova",
    year: "2026",
    period: "September 2026",
    title: "Design Team Member",
    org: "CyberNova",
    type: "club",
    details: "Active design contributor for CyberNova. Created the 5-page Mission: Find Nemo — The Tech Quest campaign creatives for the Department of IT.",
    tags: ["Design", "CyberNova", "Event Campaign", "Tech Quest"]
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

export interface CreativeFrequency {
  id: string;
  title: string;
  tag: string;
  summary: string;
  details: string;
  bullets?: string[];
  iconName: string;
  featured?: boolean;
}

export const CREATIVE_FREQUENCIES: CreativeFrequency[] = [
  {
    id: "brand-building",
    title: "Brand Building & Identity Creation",
    tag: "SIGNATURE DISCIPLINE",
    summary: "Developing complete brand identities, visual systems, memorable marks, and creative directions.",
    details: "Brand building is a visible, central pillar of my creative identity. I explore how distinct visual concepts and cohesive systems turn ideas into recognizable movements.",
    bullets: [
      "Developing comprehensive brand identities and conceptual visual frameworks",
      "Creating standalone logos and exploring expansive visual directions",
      "Building unified design languages (typography, palette, grid) for clubs and technical initiatives",
      "Combining strategic storytelling, design craft, and identity into memorable digital experiences"
    ],
    iconName: "Palette",
    featured: true
  },
  {
    id: "writing",
    title: "Writing & Content Creation",
    tag: "NARRATIVE & VOICE",
    summary: "Expressing ideas, structuring thoughts, and shaping technical storytelling.",
    details: "I enjoy writing, developing narratives, articulating perspectives, and crafting clear, engaging content that bridges complex ideas with accessible human language.",
    bullets: [
      "Translating engineering concepts into compelling narratives",
      "Drafting editorial content, article structures, and technical reflections",
      "Framing ideas with distinct voice and clarity"
    ],
    iconName: "PenTool"
  },
  {
    id: "volunteering",
    title: "Assistance & Volunteering",
    tag: "COLLABORATION & PEOPLE",
    summary: "Supporting initiatives, peer coordination, and hands-on community engagement.",
    details: "I genuinely enjoy assisting with campus events, supporting people, contributing to teams behind the scenes, and being actively involved in collaborative experiences like Alumni Meets and FORESE.",
    bullets: [
      "Active campus event coordination and guest facilitation",
      "Supporting peers, team logistics, and student orientation",
      "Creating positive, inclusive collaborative spaces"
    ],
    iconName: "Users"
  },
  {
    id: "music",
    title: "Music & Acoustic Atmosphere",
    tag: "CURATED LISTENING",
    summary: "Soundscapes that drive focus, inspire creative rhythm, and elevate the digital studio.",
    details: "Music is an essential companion to my creative workflow — setting cadence for late-night builds, sparking visual ideas, and providing acoustic focus across coding and design sessions.",
    bullets: [
      "Acoustic focus soundscapes and electronic cadence",
      "Rhythm-driven creative sprints and architecture sessions",
      "Curated listening corners reflecting studio mood"
    ],
    iconName: "Headphones"
  },
  {
    id: "visual",
    title: "Design & Visual Exploration",
    tag: "EXPERIMENTAL INTERFACES",
    summary: "Testing typography scale, negative space, and editorial layout boundaries.",
    details: "I treat interface design as an expressive craft — experimenting with unconventional grids, tactile micro-interactions, paper textures, and aesthetic compositions beyond routine templates.",
    bullets: [
      "Breaking cookie-cutter grid conventions with asymmetric editorial balance",
      "Experimenting with tactile typography, noise textures, and fine hairline coordinates",
      "Exploring interaction affordances that spark visitor curiosity"
    ],
    iconName: "Sparkles"
  },
  {
    id: "tech-experiments",
    title: "Technology & Experimentation",
    tag: "EXPLORING WHAT'S NEXT",
    summary: "Curiosity-driven investigations into quantum computing, vision algorithms, and AI.",
    details: "I am constantly drawn to emerging domains — investigating how quantum computation redefines complexity, exploring speech synthesis detectors, and pushing past standard web paradigms.",
    bullets: [
      "Investigating quantum circuits and Quantum Machine Learning algorithms",
      "Testing heuristic audio models and multimodal risk scoring",
      "Prototyping responsive web frontends with fluid state transitions"
    ],
    iconName: "Cpu"
  }
];

// Curated tracks / soundscape corner that Soumya can customize
export const LISTENING_CORNER = [
  {
    title: "Focus State // Atmospheric Waves",
    artist: "Curated Ambient Studio",
    tag: "Coding Cadence",
    bpm: "72 BPM · Low Fidelity",
  },
  {
    title: "Late Night Syntax // Deep Waves",
    artist: "Acoustic Explorations",
    tag: "Deep Systems",
    bpm: "84 BPM · Electronic Texture",
  },
  {
    title: "Creative Reverie // Analog Warmth",
    artist: "Editorial Visual Sessions",
    tag: "Visual Design",
    bpm: "68 BPM · Warm Melody",
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
