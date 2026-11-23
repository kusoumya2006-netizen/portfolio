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
  name: "Soumya Kumar",
  fullName: "Soumya Kumar",
  tagline: "Creative Technologist · Software Engineer · Designer",
  headline1: "ENGINEERING LOGIC.",
  headline2: "CREATIVE INSTINCT.",
  subtitle: "I combine engineering logic with creative instinct to build meaningful digital experiences.",
  bio: "Computer Science and Engineering undergraduate at Sri Venkateswara College of Engineering (SVCE, Class of 2028). I move between scalable backend architectures, explainable AI heuristics, and art-directed brand identity systems — bringing technical rigor and visual intention to everything I build.",
  coreManifesto: "I COMBINE ENGINEERING LOGIC WITH CREATIVE INSTINCT TO BUILD MEANINGFUL DIGITAL EXPERIENCES.",
  aboutHeadline: "NOT ONE BOX. NEVER WAS.",
  aboutBio: "I am a Computer Science student who refuses to separate technical depth from aesthetic precision. In an era where code and culture continually converge, I design and engineer systems that are not only architecturally sound, but visually memorable and deeply human to use.",
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
  interests: ["Creative Technology", "Full-Stack Engineering", "Explainable AI & ML", "Brand Identity & Systems", "Visual Architecture"],
  humanInterests: ["Brand Building & Marketing", "Creative Writing", "Photography & Visual Storytelling", "Content Creation", "Music"]
};

export const PROJECTS: Project[] = [
  {
    id: "convera",
    status: "PROTOTYPE",
    discipline: "Engineering",
    classification: "Flagship",
    teamOrSolo: "Team",
    originality: "Original SIH 2026 Prototype",
    number: "01",
    name: "CONVERA",
    shortDesc: "Integrated Institution Complaint Monitoring & Semantic Overlap Engine for AICTE (SIH 2026)",
    fullDesc: "A centralized institutional grievance monitoring architecture engineered to detect overlapping complaints, automate urgency classification, and maintain immutable audit trails across multi-department educational disputes. Developed for Smart India Hackathon 2026 (Problem Statement SIH26264).",
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
    accentColor: "#9AA58B",
    caseStudy: {
      overview: "CONVERA is a specialized institutional grievance monitoring platform engineered for academic governance. Developed under the Smart India Hackathon 2026 (Problem Statement SIH26264), the application automates ticket urgency triage, clusters semantically overlapping student complaints, and enforces immutable regulatory audit logging.",
      context: "Built for AICTE-affiliated educational institutions where dispute resolution pipelines frequently stall due to redundant submissions across departmental silos and lack of objective escalation metrics.",
      problemStatement: "College administrations receive hundreds of grievances monthly across ragging, academic fairness, and administrative friction. Without automated overlap recognition, administrative staff spend hours reading duplicate submissions while urgent cases wait in unprioritized queues without accountability.",
      objectives: [
        "Eliminate duplicate ticket processing through heuristic and semantic overlap clustering",
        "Dynamically score ticket urgency based on severity keywords and elapsed SLA time",
        "Provide verifiable, immutable audit trails for dispute resolution compliance",
        "Deliver a clean, high-performance responsive interface with comprehensive test coverage"
      ],
      researchAndExploration: "Analyzed existing higher-education ombudsman protocols and grievance workflows. Evaluated text-similarity approaches to strike the optimal balance between instant in-browser response times and accurate clustering.",
      conceptDevelopment: "Structured the system around three core pillars: an Urgency Scoring Pipeline, a Semantic Overlap Engine, and an Audit-Compliant State Machine for ticket transitions.",
      architectureOrProcess: {
        summary: "Modern client-side single page application powered by React and TypeScript, connected to Supabase for managed PostgreSQL persistence and real-time state synchronization.",
        diagramDescription: "Client (React + Vite) ➔ Urgency Heuristic Evaluator ➔ Semantic Overlap Matcher ➔ Supabase Auth & PostgreSQL Storage ➔ Immutable Audit Logs",
        modules: [
          { name: "Urgency Triage Engine", description: "Multi-tier keyword weighting algorithm calculating real-time priority scores based on issue severity and time elapsed.", tech: "TypeScript" },
          { name: "Semantic Overlap Clusterer", description: "Jaccard & term-frequency similarity matching to group redundant grievances across departments.", tech: "TypeScript" },
          { name: "Status Transition State Machine", description: "Enforces strict lifecycle progression (Pending ➔ Under Review ➔ Resolved ➔ Escalated) preventing invalid state mutations.", tech: "TypeScript & PostgreSQL" },
          { name: "Audit Trail Service", description: "Append-only activity log capturing timestamp, actor, and status delta for every ticket touchpoint.", tech: "PostgreSQL & Supabase" }
        ]
      },
      toolsAndTechnologies: [
        { category: "Frontend", items: ["React 18", "TypeScript", "Tailwind CSS", "Vite"] },
        { category: "Backend & Persistence", items: ["Supabase", "PostgreSQL", "SQL Migrations"] },
        { category: "Verification", items: ["Vitest", "Testing Library", "95 Passing Tests"] }
      ],
      implementationDetails: [
        "Designed modular TypeScript interfaces establishing strict contracts for tickets, status transitions, and audit records",
        "Implemented deterministic urgency evaluation factoring critical safety terminology into priority boosts",
        "Configured automated unit and integration test suites validating state changes, filter logic, and overlap clustering"
      ],
      individualContribution: [
        "Sole author of the client-side urgency scoring and overlap grouping algorithms",
        "Constructed the responsive dashboard view, ticket detail inspector, and action transition modals",
        "Wrote and maintained the complete 95-test Vitest test suite validating system resilience"
      ],
      challenges: [
        "Balancing keyword-based urgency boosts without causing false-positive alarm states for routine queries",
        "Handling edge cases in text tokenization and stopword removal entirely on the client before persistence"
      ],
      decisionsAndTradeoffs: [
        {
          decision: "Client-side similarity evaluation with server persistence",
          rationale: "Enabled zero-latency typing feedback for administrative triage while avoiding expensive server-side vector computation for an offline-friendly hackathon prototype."
        },
        {
          decision: "PostgreSQL row-level triggers for audit logs",
          rationale: "Ensured administrative compliance by making dispute activity logs strictly append-only."
        }
      ],
      finalOutcome: "A fully functional, verifiable prototype featuring 95 passing test suites, showcased at Smart India Hackathon 2026.",
      learnings: [
        "State machine architecture prevents administrative edge cases better than ad-hoc boolean flags",
        "Investing in comprehensive unit test suites early accelerates frontend refactoring and layout experiments"
      ],
      links: [
        { label: "View Source Code on GitHub", url: "https://github.com/kusoumya2006-netizen/CONVERA-", type: "github" }
      ]
    }
  },
  {
    id: "nexora",
    status: "PROTOTYPE",
    discipline: "Engineering",
    classification: "Flagship",
    teamOrSolo: "Team",
    originality: "Original SIH 2026 AI Prototype",
    number: "02",
    name: "NEXORA",
    shortDesc: "AI-Powered Voice-Cloning Impersonation Detection and Conversational Risk Analysis (SIH 2026)",
    fullDesc: "A modular multimodal security architecture designed to detect and counter generative voice-cloning impersonation scams. Soumya engineered the core Conversation & Risk Analysis module, evaluating linguistic pressure, urgency spikes, and manipulative social engineering cues.",
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
    accentColor: "#17231F",
    caseStudy: {
      overview: "NEXORA is a defense framework engineered to detect generative audio impersonation attacks. Built for Smart India Hackathon 2026 (Problem Statement SIH22104), the system combines acoustic deepfake analysis with real-time conversational pressure heuristics to identify fraudulent calls before financial or credential theft occurs.",
      context: "Voice-cloning tools now require only 3 seconds of reference audio to generate convincing speech clones. When paired with social engineering, acoustic-only classifiers often struggle with low-bitrate phone audio, necessitating a secondary conversational behavioral layer.",
      problemStatement: "Scammers clone voices of family members or corporate executives to orchestrate urgent wire transfers or credential sharing. Because phone lines compress audio and introduce noise, spectral artifact detection alone yields high false negatives. Analyzing *what* is said and *how* psychological pressure is applied provides crucial defensive context.",
      objectives: [
        "Engineer 18 rule-based conversational risk indicators targeting known social engineering attack vectors",
        "Implement contextual false-positive suppression to prevent alarming users during genuine family emergencies",
        "Design compound risk aggregation blending acoustic authenticity, biometric speaker match, and verbal pressure",
        "Expose explainable alert diagnostics clarifying the exact linguistic triggers behind high-risk calls"
      ],
      researchAndExploration: "Researched forensic voice analysis literature, FTC fraud call transcripts, and conversational pressure dynamics. Studied frequency of imperative commands, urgency modifiers, and financial transfer terminology in known scam scripts.",
      conceptDevelopment: "Architected a dual-pass evaluation pipeline: the acoustic model analyzes spectral coherence, while the conversational risk module processes transcribed utterance streams through 18 contextual pattern detectors.",
      architectureOrProcess: {
        summary: "FastAPI-based modular detection pipeline where incoming audio streams are concurrently evaluated for acoustic synthesis artifacts and transcribed for linguistic pressure scoring.",
        diagramDescription: "Audio Stream ➔ Acoustic Classifier (30%) + Speaker Verifier (30%) + Conversational Pressure Module (40%) ➔ Compound Risk Aggregator ➔ Explainable Diagnostics API",
        modules: [
          { name: "Conversational Urgency Heuristics", description: "18 rule-based detectors monitoring panic keywords, artificial deadlines, and immediate payment requests.", tech: "Python & Regex" },
          { name: "False-Positive Suppression Filter", description: "Distinguishes legitimate emotional distress from coercive manipulation using conversational context windows.", tech: "Python NLP" },
          { name: "Compound Scoring Calibrator", description: "Weighted aggregation formula combining acoustic confidence with behavioral dialogue scores.", tech: "Python & NumPy" },
          { name: "Explainable Alert Serializer", description: "Translates compound risk vectors into human-readable flags for downstream dashboard consumption.", tech: "FastAPI" }
        ]
      },
      toolsAndTechnologies: [
        { category: "Backend Engine", items: ["Python 3.10", "FastAPI", "Uvicorn"] },
        { category: "NLP & Heuristics", items: ["Scikit-learn", "Regex Heuristics", "NumPy"] },
        { category: "Team Collaboration", items: ["Git", "GitHub Organization", "SIH 2026 Repository"] }
      ],
      implementationDetails: [
        "Built modular detector classes allowing rapid testing and tuning of individual urgency patterns",
        "Implemented sliding-window transcript evaluation to measure escalation velocity over the duration of the call",
        "Created mock telephony call scenarios to benchmark detection latency and compound score calibration"
      ],
      individualContribution: [
        "Sole owner and author of the Conversation & Risk Analysis module and its 18 rule-based detectors",
        "Formulated the 30/30/40 weighted risk aggregation schema used across the team pipeline",
        "Implemented explainable alert generation ensuring operators see exactly why a call was flagged"
      ],
      challenges: [
        "Preventing conversational urgency heuristics from false-flagging legitimate panicked family calls",
        "Designing lightweight rule-based detectors capable of evaluating speech transcripts in sub-100ms intervals"
      ],
      decisionsAndTradeoffs: [
        {
          decision: "Rule-based heuristics over deep NLP transformers for conversational risk",
          rationale: "Guaranteed sub-50ms execution latency and 100% explainable trigger citations, vital for real-time scam intervention on edge devices."
        },
        {
          decision: "40% weight allocation to conversational heuristics in compound score",
          rationale: "Compensated for spectral degradation common in compressed cellular audio where acoustic deepfake models have lower confidence."
        }
      ],
      finalOutcome: "A robust, modular detection architecture verified on mock fraud transcripts and submitted for Smart India Hackathon 2026 evaluation.",
      learnings: [
        "Multimodal security is essential when individual sensor channels (like audio codecs) suffer from environmental noise",
        "Explainability is as critical as accuracy in security alerting—operators must trust *why* a call is flagged"
      ],
      links: [
        { label: "View Team Repository on GitHub", url: "https://github.com/deepikakarthikeyan1810-maker/NEXORA", type: "github" }
      ]
    }
  },
  {
    id: "resumatch",
    status: "PROTOTYPE",
    discipline: "Engineering",
    classification: "Flagship",
    teamOrSolo: "Individual",
    originality: "Original NLP Placement Tool",
    number: "03",
    name: "ResuMatch AI",
    shortDesc: "Semantic ATS Resume Analyzer & Interactive Keyword Compatibility Visualizer (Live on Vercel)",
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
    accentColor: "#9AA58B",
    caseStudy: {
      overview: "ResuMatch AI is a deployed browser-based analytical application that demystifies modern Applicant Tracking Systems (ATS). The application computes semantic similarity, extracts skill overlap, and visualizes keyword gaps between candidate resumes and job requisitions in real time.",
      context: "Modern hiring workflows rely heavily on algorithmic screening engines that discard qualified applicants due to minor phrasing discrepancies or absent domain keywords.",
      problemStatement: "Job seekers lack actionable transparency regarding how ATS algorithms evaluate their resumes against target job descriptions, leading to repetitive rejections without understanding whether skills were missed or simply unparsed.",
      objectives: [
        "Calculate instant ATS match percentage using TF-IDF term weighting and cosine similarity",
        "Categorize technical competencies across Languages, Frameworks, Cloud, and Methodologies",
        "Highlight exact keyword gaps with actionable phrasing recommendations",
        "Deploy a fast, responsive production application with zero server latency"
      ],
      researchAndExploration: "Investigated how enterprise ATS platforms (Workday, Greenhouse, Lever) parse PDF text, compute term frequency, and extract named technical entities.",
      conceptDevelopment: "Architected a fully client-side analytical pipeline utilizing browser-based text extraction, tokenization, frequency scoring, and reactive charts.",
      architectureOrProcess: {
        summary: "A pure client-side React 18 single-page application built with Vite and TypeScript, running similarity calculations in-memory without transmitting sensitive resume data to external servers.",
        diagramDescription: "Resume Text + Job Description ➔ Tokenizer & Stopword Filter ➔ TF-IDF Vectorizer ➔ Cosine Similarity Engine ➔ Recharts Visualization ➔ Vercel Edge Hosting",
        modules: [
          { name: "Client-Side Tokenizer", description: "Sanitizes raw text, strips formatting artifacts, and filters natural language stopwords.", tech: "TypeScript" },
          { name: "TF-IDF & Cosine Similarity Engine", description: "Computes mathematical vector alignment between resume vocabulary and requisition requirements.", tech: "TypeScript" },
          { name: "Categorical Gap Classifier", description: "Sorts missing keywords into actionable domains (Backend, Frontend, Cloud, Soft Skills).", tech: "TypeScript" },
          { name: "Interactive Visualizer", description: "Dynamic charts and animated gauge meters rendering compatibility breakdown.", tech: "Recharts & Framer Motion" }
        ]
      },
      toolsAndTechnologies: [
        { category: "Frontend Framework", items: ["React 18", "TypeScript", "Vite", "Tailwind CSS"] },
        { category: "Data Visualization", items: ["Recharts", "Framer Motion"] },
        { category: "Hosting & CI/CD", items: ["Vercel Edge Network", "GitHub CI"] }
      ],
      implementationDetails: [
        "Engineered deterministic term-frequency algorithms running in-browser with zero external API dependencies",
        "Designed accessible, high-contrast visual score dials that transition smoothly as input texts change",
        "Implemented one-click sample resume and job requisition loaders for immediate user onboarding"
      ],
      individualContribution: [
        "Architected and engineered the entire application end-to-end",
        "Formulated the similarity scoring metric and keyword extraction logic",
        "Designed the UI/UX layout and deployed the live production build to Vercel"
      ],
      challenges: [
        "Extracting clean text from unstructured resume copy without mangling technical acronyms (e.g. C++, CI/CD)",
        "Ensuring similarity calculations remained snappy and unblocked the main thread on large multi-page inputs"
      ],
      decisionsAndTradeoffs: [
        {
          decision: "Pure client-side execution over cloud NLP backend",
          rationale: "Guaranteed absolute candidate privacy—no user resume data ever leaves the local browser session, with zero hosting costs."
        },
        {
          decision: "Recharts over heavier D3 bundles",
          rationale: "Kept production bundle size light while delivering responsive, clean SVG visualizations."
        }
      ],
      finalOutcome: "A live, actively used tool deployed on Vercel helping students and job seekers test ATS compatibility with instant visual feedback.",
      learnings: [
        "Browser-based NLP calculations are surprisingly capable for single-document comparison tasks",
        "Data visualization is most effective when paired with clear qualitative recommendations, not just raw metrics"
      ],
      links: [
        { label: "View Live Application on Vercel", url: "https://resu-match-ai-delta.vercel.app/", type: "demo" },
        { label: "View Source Code on GitHub", url: "https://github.com/kusoumya2006-netizen/ResuMatchAI", type: "github" }
      ]
    }
  },
  {
    id: "vyra",
    status: "PROTOTYPE",
    discipline: "Engineering",
    classification: "Flagship",
    teamOrSolo: "Individual",
    originality: "Original Scam Detection Pipeline",
    number: "04",
    name: "VYRA",
    shortDesc: "Explainable Scam Detection Platform with Multi-Vector Heuristic Evaluation & Responsive React UI",
    fullDesc: "A multi-channel threat detection workflow designed to analyze suspicious SMS messages, email bodies, phone numbers, and phishing URLs using machine learning and transparent risk signal dashboards.",
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
    accentColor: "#B5B5AD",
    caseStudy: {
      overview: "VYRA is an explainable fraud detection platform that analyzes digital communication across four attack vectors: SMS text, phishing emails, deceptive URLs, and suspicious phone numbers. Built with a FastAPI backend and a responsive React frontend, VYRA prioritizes interpretability by displaying the exact heuristics behind every threat score.",
      context: "Phishing and digital impersonation scams have proliferated with conversational realism, tricking users into revealing OTPs, financial credentials, or identity documents.",
      problemStatement: "Most commercial fraud scanners present binary 'Safe' or 'Unsafe' labels without context, leaving users confused about subtle threats. Users need transparent, educational diagnostics explaining *why* a message or domain is hazardous.",
      objectives: [
        "Build a multi-vector ingestion pipeline supporting text, URL, and telephony inputs",
        "Train an explainable NLP classifier capable of isolating coercive phishing terminology",
        "Implement heuristic rules for URL structure (subdomain count, deceptive brand keywords, TLD risk)",
        "Design an intuitive dashboard that visually tags danger signals in the user's communication text"
      ],
      researchAndExploration: "Analyzed SMS phishing datasets and OpenPhish URL feeds. Studied common domain obfuscation techniques (homoglyphs, misleading subdomains) and high-urgency financial extortion scripts.",
      conceptDevelopment: "Combined statistical NLP classification with deterministic heuristic rules, feeding an explainable output serializer that highlights suspicious spans directly on the user's message preview.",
      architectureOrProcess: {
        summary: "Decoupled full-stack architecture featuring a FastAPI Python microservice running ML inference and heuristic parsing, consumed by a reactive TypeScript client.",
        diagramDescription: "Input (SMS/Email/URL) ➔ FastAPI Endpoint ➔ Text Vectorizer + Domain Analyzer ➔ Scikit-learn Classifier + Heuristic Engine ➔ Risk Report with Highlighted Tokens ➔ React Dashboard",
        modules: [
          { name: "Text Vectorizer & Classifier", description: "TF-IDF feature extraction feeding regularized classifiers for phishing likelihood scoring.", tech: "Python & Scikit-learn" },
          { name: "Domain & URL Heuristic Parser", description: "Evaluates URL length, suspicious top-level domains, IP-as-host, and keyword masquerading.", tech: "Python" },
          { name: "Explainability Engine", description: "Maps classifier feature weights back to specific words in the input message for visual highlighting.", tech: "Python" },
          { name: "Threat Dashboard", description: "Responsive interface presenting severity gauges and annotated threat breakdowns.", tech: "React & TypeScript" }
        ]
      },
      toolsAndTechnologies: [
        { category: "Backend Services", items: ["Python 3.10", "FastAPI", "Uvicorn"] },
        { category: "Machine Learning", items: ["Scikit-learn", "TF-IDF Vectorizer", "NumPy"] },
        { category: "Frontend Interface", items: ["React 18", "TypeScript", "Tailwind CSS", "Vite"] }
      ],
      implementationDetails: [
        "Configured FastAPI CORS middleware and schema validation using Pydantic models",
        "Trained baseline linear models on labeled SMS spam and phishing datasets",
        "Crafted an interactive message review card that highlights flagged keywords in warning amber and critical red"
      ],
      individualContribution: [
        "Architected the full-stack system and developed both the Python backend and React frontend",
        "Trained the NLP vectorizer models and formulated the domain heuristic rules",
        "Created the UI design system emphasizing explainable security diagnostics"
      ],
      challenges: [
        "Minimizing false positives on legitimate promotional text messages from banks and service providers",
        "Structuring a unified threat scoring metric that seamlessly balances unstructured prose and structural URL metrics"
      ],
      decisionsAndTradeoffs: [
        {
          decision: "FastAPI over Django or Flask",
          rationale: "Automatic OpenAPI documentation, native asynchronous request handling, and strong Pydantic typing."
        },
        {
          decision: "Interpretable linear models over deep black-box networks",
          rationale: "Enabled instant extraction of feature importance to visually explain which exact words triggered the alert."
        }
      ],
      finalOutcome: "A clean, functional prototype with end-to-end API integration and explainable visual threat breakdowns.",
      learnings: [
        "Explainability transforms security software from an annoyance into an educational tool",
        "Combining deterministic heuristic rules with probabilistic ML delivers greater resilience against evasion"
      ],
      links: [
        { label: "View Source Code on GitHub", url: "https://github.com/kusoumya2006-netizen/VYRA", type: "github" }
      ]
    }
  },
  {
    id: "netwatch",
    status: "COMPLETED",
    discipline: "Engineering",
    classification: "Flagship",
    teamOrSolo: "Individual",
    originality: "Original Network Telemetry Service",
    number: "05",
    name: "NetWatch",
    shortDesc: "Real-Time Distributed Network Telemetry Logger & Cloud Health Dashboard",
    fullDesc: "A network monitoring and telemetry application featuring automated endpoint ping health checks, reactive web dashboard, and MongoDB Atlas timeseries latency persistence.",
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
    accentColor: "#17231F",
    caseStudy: {
      overview: "NetWatch is a lightweight network health monitor and telemetry dashboard engineered to track uptime, ping latency, and HTTP status codes across distributed microservices. Powered by Node.js, Express, and MongoDB Atlas, it provides an uncluttered operational dashboard for developers.",
      context: "Developers running multiple self-hosted services or API endpoints often struggle with heavyweight enterprise APM tools that demand complex agents and paid plans.",
      problemStatement: "Small teams and student projects need an accessible, self-hostable monitoring tool that records periodic health metrics, stores historic response times in the cloud, and presents service statuses at a glance.",
      objectives: [
        "Implement automated health probe workers executing scheduled HTTP and ping checks",
        "Store historical response times and status codes in MongoDB Atlas for trend inspection",
        "Deliver a real-time reactive dashboard showing live uptime ratios and latency graphs",
        "Design clean REST endpoints for adding, editing, and deleting monitored services"
      ],
      researchAndExploration: "Investigated network probe protocols, HTTP timeout handling, and optimal timeseries schema design in document databases.",
      conceptDevelopment: "Built around a decoupled polling daemon that queries target URLs at configurable intervals, writing structured health events to MongoDB Atlas collections.",
      architectureOrProcess: {
        summary: "Express-based REST backend managing automated cron-style polling tasks, persisting telemetry snapshots to MongoDB Atlas, and serving data to a responsive React frontend.",
        diagramDescription: "Scheduler Worker ➔ HTTP/Ping Probes ➔ Express API ➔ MongoDB Atlas Timeseries Collections ➔ React Frontend Dashboard",
        modules: [
          { name: "Endpoint Probe Worker", description: "Performs concurrent network requests measuring round-trip latency and validating HTTP response codes.", tech: "Node.js & Axios" },
          { name: "Timeseries Persistence Engine", description: "Stores timestamped ping samples and uptime flags in indexed MongoDB Atlas collections.", tech: "MongoDB & Mongoose" },
          { name: "Telemetry REST API", description: "CRUD endpoints for configuring monitored endpoints, thresholds, and inspection ranges.", tech: "Express" },
          { name: "Real-Time Metrics UI", description: "Visualizes service statuses with status pill beacons and latency charts.", tech: "React & Tailwind CSS" }
        ]
      },
      toolsAndTechnologies: [
        { category: "Backend Runtime", items: ["Node.js", "Express", "Mongoose"] },
        { category: "Cloud Database", items: ["MongoDB Atlas", "Timeseries Indexing"] },
        { category: "Frontend Interface", items: ["React", "TypeScript", "Tailwind CSS"] }
      ],
      implementationDetails: [
        "Structured Mongoose schemas with compound indexes on endpointId and timestamp for fast range queries",
        "Implemented error-safe timeout mechanisms preventing stalled requests from blocking the probe queue",
        "Designed responsive service cards with visual color-coded operational states (Active, Degraded, Down)"
      ],
      individualContribution: [
        "Built the complete backend service, probe daemon, and database connection logic",
        "Created MongoDB Atlas cluster, security credentials, and collections architecture",
        "Constructed the responsive React dashboard and service registration forms"
      ],
      challenges: [
        "Preventing transient network hiccups from falsely logging a persistent service outage",
        "Managing database growth for high-frequency ping intervals with automated TTL index expiration"
      ],
      decisionsAndTradeoffs: [
        {
          decision: "MongoDB Atlas over local SQLite",
          rationale: "Enabled persistent cloud storage accessible across multi-host deployment environments without local file write locks."
        },
        {
          decision: "Configurable retry threshold before status transition to 'Down'",
          rationale: "Avoided alert fatigue caused by single dropped packets or momentary DNS resolution hiccups."
        }
      ],
      finalOutcome: "A clean, functional network telemetry platform with cloud persistence, successfully monitoring test endpoints.",
      learnings: [
        "Distributed telemetry requires careful consideration of probe timeouts and retry policies",
        "Document databases are well-suited for timeseries monitoring when combined with TTL indexes"
      ],
      links: [
        { label: "View Source Code on GitHub", url: "https://github.com/kusoumya2006-netizen/netwatch_new", type: "github" }
      ]
    }
  },
  {
    id: "offscript",
    status: "COMPLETED",
    discipline: "Creative",
    classification: "Brand Identity",
    teamOrSolo: "Individual",
    originality: "Original Creator Media Brand",
    number: "06",
    name: "OFFSCRIPT",
    shortDesc: "Creator Media Brand Identity & Visual Architecture System (Published on Behance)",
    fullDesc: "A creator-oriented media brand built around pop culture, internet trends, music, fashion, and unfiltered opinions. Designed with bold, oversized condensed black typography, vibrant hot-pink graphics, purple organic shapes, and an expressive orange-haired character.",
    problem: "Modern creator brands frequently collapse into generic minimalism or chaotic noise, lacking an authentic, memorable visual architecture that carries across multi-platform digital spaces.",
    contribution: [
      "Crafted cohesive visual brand identity system from typography to digital asset library",
      "Illustrated expressive orange-haired orangutan mascot as central narrative character",
      "Designed high-contrast editorial typography system on warm ivory canvas",
      "Authored brand manifesto: 'BREAK THE FORMAT. NOT YOUR VOICE.'",
      "Published complete brand system and social kit on Behance"
    ],
    tech: ["Brand Identity", "Vector Design", "Digital Illustration", "Typography", "Editorial Layout"],
    category: ["All", "UI/UX", "Brand"],
    github: null,
    demo: "https://www.behance.net/gallery/258825847/OFFSCRIPT-Profile-Identity-Social-Header",
    metrics: "Published on Behance · Comprehensive Identity System",
    featured: true,
    accentColor: "#FF007A",
    caseStudy: {
      overview: "OFFSCRIPT is a creator-oriented digital media brand built for cultural critique, internet trends, music, and unfiltered personal expression. Designed by Soumya Kumar, the visual identity embodies an unapologetic, rebellious creative spirit with editorial precision.",
      context: "Digital media spaces are crowded with template-driven visual content. OFFSCRIPT was created to prove that bold, expressive typography and character illustration can create a distinctive, studio-grade media brand that commands attention.",
      problemStatement: "Emerging digital creators struggle to build brand equity without an authentic visual architecture. Most default to generic sans-serif templates or loud, disjointed graphics that fail to communicate an intentional, premium identity.",
      objectives: [
        "Establish an unmistakable, energetic brand identity blending editorial discipline with youth rebellion",
        "Design a multi-asset system including condensed wordmark, lightning bolt monogram, and character illustration",
        "Formulate a high-contrast color palette: warm ivory base, deep black typography, neon hot-pink, and purple accents",
        "Publish a complete social header and profile identity showcase on Behance"
      ],
      researchAndExploration: "Explored vintage editorial magazines, street-culture typography, brutalist web posters, and expressive cartoon iconography. Studied how high-contrast condensed fonts create visual rhythm when juxtaposed against illustrative characters.",
      conceptDevelopment: "Anchored the identity in the core message: 'BREAK THE FORMAT. NOT YOUR VOICE.' Developed an illustrated orange-haired orangutan mascot as the embodiment of contemplative observation and unfiltered commentary.",
      architectureOrProcess: {
        summary: "Comprehensive multi-touchpoint brand system spanning logo marks, editorial poster layouts, social banners, and digital collateral.",
        diagramDescription: "Core Manifesto ➔ Typography Spec (Condensed Gothic) ➔ Color System (Ivory / Black / Pink / Purple) ➔ Character Illustration ➔ Master Poster Layouts ➔ Behance Case Study",
        modules: [
          { name: "Primary Wordmark", description: "Oversized condensed black letterforms framed by vibrant red-orange angled slashes (/OFFSCRIPT/).", tech: "Vector Geometry" },
          { name: "OS Monogram Mark", description: "Interlocking letterforms traversed by a dynamic orange lightning bolt on dark backdrop.", tech: "Vector Design" },
          { name: "Illustrated Mascot", description: "Custom character with vibrant orange fur and expressive facial emotion, anchoring the brand's personality.", tech: "Digital Illustration" },
          { name: "Editorial Poster Suite", description: "High-contrast layout pairing condensed headlines, offset text boxes, and diagonal color fields.", tech: "Canva & Vector Layout" }
        ]
      },
      toolsAndTechnologies: [
        { category: "Visual Design", items: ["Vector Art", "Digital Illustration", "Canva Studio"] },
        { category: "Identity Craft", items: ["Typography Pairing", "Editorial Composition", "Color Theory"] },
        { category: "Portfolio Publication", items: ["Behance Portfolio", "Social Identity System"] }
      ],
      implementationDetails: [
        "Crafted exact mathematical proportions for the angled slash elements flanking the primary wordmark",
        "Hand-rendered the illustrated mascot to maintain an authentic, warm, human imperfection",
        "Constructed production-ready social media headers, profile icons, and editorial print posters"
      ],
      individualContribution: [
        "Conceived, art-directed, and designed the complete OFFSCRIPT brand identity",
        "Illustrated the central character mascot and authored the core brand manifesto",
        "Published and curated the case study on Behance: https://www.behance.net/gallery/258825847/OFFSCRIPT-Profile-Identity-Social-Header"
      ],
      challenges: [
        "Balancing high-energy hot pink and orange hues against a clean, readable editorial canvas",
        "Ensuring the condensed typography remains legible across small mobile profile icons as well as large posters"
      ],
      decisionsAndTradeoffs: [
        {
          decision: "Warm ivory background (#F7F4EE) over stark white",
          rationale: "Imparts an editorial, tactile magazine feel that softens high-contrast neon accents."
        },
        {
          decision: "Character illustration as secondary anchor rather than standalone mascot logo",
          rationale: "Preserved the brand's serious editorial credibility while infusing playfulness and viral recognizability."
        }
      ],
      finalOutcome: "A complete, studio-grade visual identity published on Behance with overwhelming positive feedback for its energetic art direction.",
      learnings: [
        "Great brand systems require disciplined contrast: restraint in one dimension (background canvas) allows maximal expression in another (typography and character)",
        "A compelling verbal manifesto clarifies visual design decisions better than arbitrary aesthetic preferences"
      ],
      links: [
        { label: "View Official Project on Behance", url: "https://www.behance.net/gallery/258825847/OFFSCRIPT-Profile-Identity-Social-Header", type: "behance" }
      ]
    }
  },
  {
    id: "borderpulse",
    status: "ACADEMIC",
    discipline: "Engineering",
    classification: "Academic",
    teamOrSolo: "Team",
    originality: "Academic IoT Simulation",
    number: "07",
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
    status: "COMPLETED",
    discipline: "Engineering",
    classification: "Secondary",
    teamOrSolo: "Individual",
    originality: "Coursework Reservation Application",
    number: "08",
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
    status: "COMPLETED",
    discipline: "Engineering",
    classification: "Academic",
    teamOrSolo: "Individual",
    originality: "C++ Systems & Data Structures",
    number: "09",
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
    status: "EXPERIMENTAL",
    discipline: "Engineering",
    classification: "Exploratory",
    teamOrSolo: "Individual",
    originality: "Computer Vision Course Exploration",
    number: "10",
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
    behanceUrl: "https://www.behance.net/gallery/258825847/OFFSCRIPT-Profile-Identity-Social-Header",
    gallery: [
      { label: "Main Brand Poster & Character", url: "/images/designs/offscript/poster.jpg" },
      { label: "Condensed Wordmark", url: "/images/designs/offscript/wordmark.png" },
      { label: "OS Lightning Monogram", url: "/images/designs/offscript/monogram.png" }
    ],
    caseStudy: {
      creativeBrief: "Create an unmistakable, provocative creator brand identity that stands out in saturated social feeds while maintaining editorial rigor.",
      designObjective: "Establish a rebellious, youthful visual language with oversized condensed typography, vibrant color friction, and a memorable mascot.",
      targetAudience: "Gen-Z & millennial digital creators, cultural commentators, music/fashion enthusiasts, and internet culture communities.",
      conceptDevelopment: "Centered around the philosophy of breaking algorithmic conformity. The illustrated orangutan serves as an ironic, thoughtful observer of internet chaos.",
      typographySystem: [
        { role: "Headline Wordmark", font: "Oversized Condensed Sans / Display Gothic", usage: "High-impact statements and primary branding" },
        { role: "Contextual Panels", font: "Monospace / Condensed Bold", usage: "Categorical tags and provocative topic summaries" }
      ],
      colorPalette: [
        { name: "Warm Editorial Ivory", hex: "#F7F4EE", role: "Base canvas background" },
        { name: "Signal Hot Pink", hex: "#FF007A", role: "Vibrant accent fields & graphic cuts" },
        { name: "Electric Purple", hex: "#6320EE", role: "Flowing organic waves" },
        { name: "Deep Void Black", hex: "#111111", role: "Condensed headline typography" },
        { name: "Blaze Orange", hex: "#FF4500", role: "Mascot hair & lightning bolt icon" }
      ],
      visualLanguage: "Editorial asymmetry, diagonal graphic fractures, oversized condensed typography, and human-crafted character illustration.",
      execution: [
        "Crafted primary wordmark framed by angled slashes",
        "Engineered OS monogram with lightning bolt cutout",
        "Hand-rendered illustrated orangutan character",
        "Built modular social banners and editorial posters"
      ],
      finalApplications: [
        "Social media headers (YouTube, X, Instagram)",
        "Profile icon avatar system",
        "High-resolution editorial print posters",
        "Digital content video title cards"
      ],
      behanceUrl: "https://www.behance.net/gallery/258825847/OFFSCRIPT-Profile-Identity-Social-Header"
    }
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
    behanceUrl: "https://www.behance.net/gallery/258824845/VELORA-Experimental-Skincare-Brand-Identity",
    gallery: [
      { label: "FORM / 001 Daily Serum Campaign Poster", url: "/images/designs/velora/poster.jpg" },
      { label: "VÉLORA Minimalist Monogram & Wordmark", url: "/images/designs/velora/logo.png" }
    ],
    caseStudy: {
      creativeBrief: "Design a conceptual ultra-premium skincare brand communicating clinical efficacy through restrained Scandinavian minimalism and sculptural luxury.",
      designObjective: "Shift skincare branding from busy ingredient claims to calm, intentional confidence through dramatic lighting and architectural typography.",
      targetAudience: "Discerning consumers seeking minimalist skincare rituals, premium cosmetic aesthetics, and intentional formulation.",
      conceptDevelopment: "The FORM collection treats skincare formulations as pure architectural objects. The dropper bottle and droplet are lit with dramatic chiaroscuro against pitch black.",
      typographySystem: [
        { role: "Collection Title", font: "Heavy Geometric Sans (FORM)", usage: "Dominant structural headline" },
        { role: "Brand Wordmark", font: "Custom Tracking Sans (VÉLORA)", usage: "Luxury brand signature with geometric V glyph" },
        { role: "Product Metadata", font: "Clean Monospace", usage: "Dosage (30 ML), product formula ID (FORM / 001)" }
      ],
      colorPalette: [
        { name: "Deep Charcoal Black", hex: "#0E1210", role: "Primary ambient backdrop" },
        { name: "Warm Champagne Ivory", hex: "#F4EDE4", role: "Primary typography" },
        { name: "Botanical Sage Green", hex: "#88D43B", role: "Monogram V emblem accent" },
        { name: "Brushed Pale Gold", hex: "#C5B392", role: "Fine hairline dividers and metadata" }
      ],
      visualLanguage: "Subdued luxury, tactile glass surfaces, precise typographic hierarchy, generous negative space, and studio lighting.",
      execution: [
        "Rendered high-detail 3D glass serum bottle with liquid dropper refraction",
        "Crafted geometric VÉLORA monogram insignia",
        "Composed campaign poster balancing oversized headline typography with delicate specs"
      ],
      finalApplications: [
        "Product carton packaging and secondary box layouts",
        "E-commerce hero product presentation posters",
        "Social launch campaign lookbook"
      ],
      behanceUrl: "https://www.behance.net/gallery/258824845/VELORA-Experimental-Skincare-Brand-Identity"
    }
  },
  {
    id: "qcic-logo",
    modNumber: "MOD-03",
    number: "03",
    name: "QCIC Official Brand Identity & Logo",
    role: "Design Lead",
    clientOrOrg: "Quantum Computing and Intelligence Club (QCIC)",
    shortDesc: "Visual identity for the Quantum Computing and Intelligence Club — a monochromatic silver identity inspired by quantum waveforms and computational intelligence.",
    fullDesc: "Visual identity designed for the Quantum Computing and Intelligence Club (QCIC) at SVCE. Crafted by Soumya K. in her capacity as Design Lead. Features the authentic monochrome silver artwork: continuous 3D quantum ribbon waveform crossing a circular orbital sphere, interference wireframe lattice, and official club typography 'QUANTUM COMPUTING INTELLIGENCE CLUB — EXPLORE · CREATE · TRANSFORM · A3 | MONOCHROME SILVER'.",
    category: "Brand Identity & Insignia",
    categoryTags: ["Official Logo", "Brand Identity", "Monochrome Silver", "Quantum Waveform", "QCIC Leadership"],
    year: "2026",
    pages: "Vector Master Asset",
    tools: "Canva · Vector Tools",
    thumbnail: "/assets/design/qcic-logo.jpg",
    aspectRatio: "aspect-[5/4]",
    viewUrl: "https://canva.link/jt46qm6apzz2xht",
    editUrl: "https://canva.link/jt46qm6apzz2xht",
    isIdentity: true,
    accentColor: "#9AA58B",
    brandMessage: "EXPLORE · CREATE · TRANSFORM",
    caseStudy: {
      creativeBrief: "Establish a definitive, institutional-grade visual emblem for SVCE's flagship student organization dedicated to quantum computing and artificial intelligence.",
      designObjective: "Translate complex theoretical concepts (superposition, wave-particle duality, quantum state transitions) into a memorable, mathematically elegant insignia.",
      targetAudience: "Engineering students, academic researchers, visiting industry dignitaries, and university technical symposium attendees.",
      conceptDevelopment: "Synthesized the dual nature of quantum computing: a smooth sinusoidal ribbon symbolizing continuous probability waveforms, encapsulated within an orbital ring representing discrete computational bounds.",
      typographySystem: [
        { role: "Club Title", font: "Modern Extended Geometric Sans", usage: "QUANTUM COMPUTING INTELLIGENCE CLUB" },
        { role: "Motto & Specification", font: "Clean Monospace", usage: "EXPLORE · CREATE · TRANSFORM · A3 | MONOCHROME SILVER" }
      ],
      colorPalette: [
        { name: "Monochrome Silver", hex: "#D8D8D8", role: "Primary 3D waveform and metallic orbital ring" },
        { name: "Deep Charcoal Black", hex: "#0A0A0A", role: "Contrast background setting" },
        { name: "Pale Ivory", hex: "#EBEBEB", role: "Secondary club typography" }
      ],
      visualLanguage: "Mathematical symmetry, wireframe interference lattices, brushed metallic rendering, and high-contrast space-age minimalism.",
      execution: [
        "Crafted vector master assets in Canva with strict geometric alignment",
        "Formulated A3 print specification and digital SVG insignia",
        "Built responsive variations for club badges, presentation decks, and technical publications"
      ],
      finalApplications: [
        "Official club insignia and institutional documentation",
        "Event banners and hackathon accreditation assets",
        "Club merchandise, lapel pins, and technical publication mastheads"
      ],
      canvaUrl: "https://canva.link/jt46qm6apzz2xht"
    }
  },
  {
    id: "mission-find-nemo",
    modNumber: "MOD-04",
    number: "04",
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
    accentColor: "#17231F",
    brandMessage: "THINK. SOLVE. EXPLORE. — EVERY CHALLENGE TAKES YOU CLOSER.",
    caseStudy: {
      creativeBrief: "Design an exciting, curiosity-driven event campaign for an online multi-round technical challenge hosted by CyberNova and the Department of IT.",
      designObjective: "Blend deep-sea mystery with cybernetic technical aesthetics to drive student registration across 2nd and 3rd year CSE and IT departments.",
      targetAudience: "Engineering undergraduates interested in algorithmic puzzles, debugging, and competitive technical problem solving.",
      conceptDevelopment: "Subverted the familiar pop-culture motif of finding Nemo by placing the character in an underwater cyber-ruin with glowing holographic portals.",
      typographySystem: [
        { role: "Event Title", font: "Bold Condensed Display (FIND NEMO)", usage: "Vibrant safety-orange headline" },
        { role: "Sub-Header & Date", font: "Clean Geometric Sans", usage: "THE TECH QUEST · 11th SEPTEMBER 2026" }
      ],
      colorPalette: [
        { name: "Deep Abyssal Blue", hex: "#0B2236", role: "Underwater ambient backdrop" },
        { name: "Signal Coral Orange", hex: "#FF5C1C", role: "Primary title typography and clownfish accent" },
        { name: "Cyan Portal Glow", hex: "#00E5FF", role: "Holographic lighting and digital accents" }
      ],
      visualLanguage: "Cinematic depth of field, underwater light refraction, vibrant orange/cyan complementary color grading, and legible contact hierarchy.",
      execution: [
        "Composed five-page event announcement collateral",
        "Integrated dynamic QR registration gateway and coordinator contacts",
        "Optimized layout for Instagram stories and physical departmental bulletin boards"
      ],
      finalApplications: [
        "Social media campaign across campus technical clubs",
        "Departmental notice board posters (SVCE IT)",
        "Live event orientation slides"
      ],
      canvaUrl: "https://www.canva.com/d/pZC2CDsxvDjIXhy"
    }
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
    accentColor: "#9AA58B",
    brandMessage: "TRUTH · PEACE · NON-VIOLENCE",
    caseStudy: {
      creativeBrief: "Create a solemn, historically resonant commemorative editorial post for Gandhi Jayanti on behalf of CyberNova student society.",
      designObjective: "Avoid generic patriotic clichés by honoring the Mahatma's legacy through authentic historical archival photography and tactile paper textures.",
      targetAudience: "SVCE student body, faculty members, and institutional digital followers.",
      conceptDevelopment: "Inspired by the Dandi March and khadi paper textures. Layered monochrome film strips with torn parchment borders and subtle dry botanical sprigs.",
      typographySystem: [
        { role: "Honorific Heading", font: "Refined High-Contrast Serif (GANDHI JAYANTI)", usage: "Centerpiece historic typography" },
        { role: "Core Values", font: "Monospace / Clean Sans", usage: "TRUTH · PEACE · NON-VIOLENCE" }
      ],
      colorPalette: [
        { name: "Khadi Parchment Ivory", hex: "#F3ECE1", role: "Textured paper background" },
        { name: "Deep Ink Black", hex: "#1C1C1C", role: "High-contrast serif typography" },
        { name: "Olive Earth Sage", hex: "#7B886F", role: "Botanical highlights and torn edges" }
      ],
      visualLanguage: "Analog scrapbooking, historical documentary photography, tactile torn-paper edges, and quiet, dignified negative space.",
      execution: [
        "Curated high-resolution historical march photo of Mahatma Gandhi",
        "Layered film strip border accents and dried flora fragments",
        "Published across CyberNova official Instagram and campus communication channels"
      ],
      finalApplications: [
        "Official institutional social media release",
        "Commemorative digital poster for campus screens"
      ],
      canvaUrl: "https://www.canva.com/d/ALE1ZyGTWRyw0D5"
    }
  },
  {
    id: "sttp-certificate",
    modNumber: "MOD-06",
    number: "06",
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
    accentColor: "#B5B5AD",
    brandMessage: "QUANTUM MACHINE LEARNING: ALGORITHMS, APPLICATIONS AND HANDS-ON EXPLORATION",
    caseStudy: {
      creativeBrief: "Design an accredited institutional Certificate of Appreciation for faculty coordinators and keynote scholars of a 5-day state-level training program.",
      designObjective: "Combine the solemn formality of national institutional accreditations with sophisticated modern quantum-inspired curves and refined typographic balance.",
      targetAudience: "Heads of departments, professors, academic coordinators, and university dignitaries.",
      conceptDevelopment: "Structured around an orbital atomic emblem and flowing gold filigree lines, anchoring six official accreditation logos with balanced visual weight.",
      typographySystem: [
        { role: "Certificate Title", font: "Heavy Trajan/Modern Bold Serif (CERTIFICATE)", usage: "Primary honorific title" },
        { role: "Recipient & Citation", font: "Classic Academic Serif & Bold Sans", usage: "Faculty coordinator name and citation body" }
      ],
      colorPalette: [
        { name: "Cream Parchment Base", hex: "#FCFAF6", role: "High-grade certificate paper stock" },
        { name: "Deep Imperial Emerald", hex: "#1A3326", role: "Border filigree and primary headings" },
        { name: "Champagne Warm Gold", hex: "#A88B46", role: "Accent orbital ribbons and header banner" }
      ],
      visualLanguage: "Formal institutional symmetry, micro-guilloche border patterns, gold-foil visual accents, and official signatory alignment.",
      execution: [
        "Integrated six verified accreditation vector emblems (NBA, NAAC, NIRF, AICTE, IIC, SVCE)",
        "Generated eleven individual customized recipient pages with faculty titles and signatures",
        "Prepared high-resolution print files suitable for heavy cardstock presentation"
      ],
      finalApplications: [
        "Physical printed certificates awarded to Faculty Coordinators (including Dr. R. Anitha, HOD/CSE)",
        "Digital PDF archive of training program credentials"
      ],
      canvaUrl: "https://www.canva.com/d/9vAmhFPo94mhx6Q"
    }
  }
];

export const JOURNEY: JourneyItem[] = [
  {
    id: "qcic",
    year: "2026",
    period: "2026–Present",
    title: "Design Lead",
    org: "Quantum Computing and Intelligence Club (QCIC) · SVCE",
    type: "leadership",
    details: "Lead visual and brand direction for QCIC. Designed the official club logo and monolithic silver identity, authored the 11-recipient STTP on Quantum Machine Learning certificate series, and direct creative collateral for symposiums and workshops.",
    tags: ["Design Lead", "Logo Design", "Brand Identity", "QCIC", "SVCE Leadership"]
  },
  {
    id: "cybernova",
    year: "2026",
    period: "September 2026–Present",
    title: "Design Team Member",
    org: "CyberNova · Dept. of Information Technology, SVCE",
    type: "club",
    details: "Core design team contributor for CyberNova student society. Created the 5-page 'Mission: Find Nemo — The Tech Quest' campaign visuals and commemorative editorial series including Gandhi Jayanti.",
    tags: ["Design Team", "CyberNova", "Tech Quest", "SVCE IT", "Event Campaigns"]
  },
  {
    id: "sih-2026",
    year: "2026",
    period: "2026",
    title: "Hackathon Project Contributor (Dual Selection)",
    org: "Smart India Hackathon (SIH 2026)",
    type: "hackathon",
    details: "Contributed key engineering modules across two selected SIH projects: CONVERA (urgency triage & semantic overlap clustering, SIH26264) and NEXORA (conversational risk scoring & 18 rule-based heuristics, SIH22104).",
    tags: ["SIH 2026", "CONVERA", "NEXORA", "Voice Cloning", "FastAPI", "React"]
  },
  {
    id: "uiux-intern",
    year: "2025",
    period: "2025",
    title: "UI/UX Design Intern",
    org: "Design Internship",
    type: "internship",
    details: "Worked on UI/UX workflows, wireframes, and responsive interface prototypes using Figma and Canva, applying user-centered design principles and cross-functional team feedback.",
    tags: ["Internship", "UI/UX", "Figma", "Canva", "User-Centred Design"]
  },
  {
    id: "sivasakthi",
    year: "2025",
    period: "8–19 December 2025",
    title: "Software Engineering Intern",
    org: "Sivasakthi Software Services",
    type: "internship",
    details: "Two-week on-site software internship gaining hands-on insight into commercial software workflows, code reviews, and structured team delivery practices.",
    tags: ["Software Engineering", "Internship", "On-site", "Code Delivery"]
  },
  {
    id: "alumni-meet",
    year: "2026",
    period: "2026",
    title: "Campus Volunteer",
    org: "Institutional Alumni Meet — SVCE",
    type: "volunteer",
    details: "Assisted in campus coordination, registration logistics, and guest facilitation for the institutional SVCE Alumni Meet.",
    tags: ["Volunteer", "SVCE", "Campus Logistics"]
  },
  {
    id: "forese",
    year: "2026",
    period: "2026",
    title: "Event Volunteer",
    org: "FORESE Mock Interview Sessions",
    type: "volunteer",
    details: "Coordinated mock interview logistics, candidate scheduling, and student orientation at FORESE career preparation sessions.",
    tags: ["Volunteer", "FORESE", "Career Prep"]
  }
];

export const CREATIVE_FREQUENCIES: CreativeFrequency[] = [
  {
    id: "brand-building",
    dimensionNumber: "01",
    title: "Brand Building & Identity",
    tag: "SIGNATURE DISCIPLINE",
    summary: "Crafting intentional brand identities, positioning, visual languages, and coherent typography systems.",
    details: "I view branding as the architectural soul of an organization. From defining core positioning to formulating typography hierarchies and color systems, I approach identity creation as a synthesis of psychology, visual precision, and strategic communication.",
    bullets: [
      "Defining core brand positioning, values, and distinct tone of voice that set initiatives apart",
      "Designing unified visual languages across logos, typography, color palettes, and digital touchpoints",
      "Directing creative concepts that turn abstract ideas into recognizable, evocative visual identities (e.g. OFFSCRIPT, VÉLORA)",
      "Studying audience engagement patterns and creative communication strategies"
    ],
    iconName: "Palette",
    featured: true
  },
  {
    id: "creative-writing",
    dimensionNumber: "02",
    title: "Creative Writing & Prose",
    tag: "NARRATIVE & CLARITY",
    summary: "Personal expression through essays, technology critique, storytelling, and reflective prose.",
    details: "Writing is my primary medium for clarifying thinking, deconstructing algorithmic complexity, and exploring human perspective. Whether drafting essays on technology culture or reflective notes, I care deeply about cadence, precision, and voice.",
    bullets: [
      "Authoring reflective essays on technology, human systems, and digital culture",
      "Deconstructing complex software architectures into lucid, engaging written prose",
      "Focusing on editorial cadence, tone, and finding the exact right word to make ideas stick"
    ],
    iconName: "PenTool"
  },
  {
    id: "content-creation",
    dimensionNumber: "03",
    title: "Content Creation & Media",
    tag: "DIGITAL STORYTELLING",
    summary: "Developing content concepts, visual pacing, and digital formats that authentically engage.",
    details: "I experiment with digital storytelling formats that bridge the gap between technical insight and creative engagement. It is about understanding what captures attention honestly and structuring layouts that reward the viewer's curiosity.",
    bullets: [
      "Brainstorming and developing creative concepts and digital content formats from seed ideas to final layouts",
      "Structuring visual narratives with intentional editorial hierarchy, typographic rhythm, and visual interest",
      "Exploring digital storytelling methods that authentically inform, captivate, and connect with technical communities"
    ],
    iconName: "Video"
  },
  {
    id: "photography",
    dimensionNumber: "04",
    title: "Photography & Visual Storytelling",
    tag: "FRAME & LIGHT",
    summary: "Exploring composition, architectural lines, natural light, and quiet candid moments.",
    details: "Behind the lens, I look for geometry, light, and symmetry in everyday urban landscapes and campus environments. Photography trains my eye for negative space, balance, and color harmony in digital design.",
    bullets: [
      "Capturing architectural geometry, light refractions, and urban textures",
      "Informing digital interface spacing and composition through real-world visual framing",
      "Curating candid observational photography that values natural atmosphere over heavy filters"
    ],
    iconName: "Camera"
  },
  {
    id: "music",
    dimensionNumber: "05",
    title: "Music & Acoustic Cadence",
    tag: "PERSONAL INSPIRATION",
    summary: "A personal hobby and continuous source of creative inspiration, mood, and rhythm.",
    details: "Music is an indispensable creative sanctuary. Listening across diverse genres sets the tempo for late-night problem solving, sparks unexpected visual associations, and provides acoustic focus for deep work.",
    bullets: [
      "A personal hobby and lifelong passion exploring diverse musical styles, instruments, and moods",
      "An endless reservoir of creative energy that sparks visual ideas and sets the rhythm for thinking",
      "Acoustic atmosphere that fuels intense creative sprints and thoughtful contemplation"
    ],
    iconName: "Headphones"
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages used across backend systems, algorithms, and application logic.",
    skills: [
      { name: "Python", projectIds: ["nexora", "vyra", "cropweed", "borderpulse"] },
      { name: "TypeScript", projectIds: ["convera", "resumatch", "portfolio"] },
      { name: "Java", projectIds: ["library"] },
      { name: "C / C++", projectIds: ["library"] },
      { name: "SQL", projectIds: ["convera"] }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Modern web engineering tools for responsive, accessible, high-performance interfaces.",
    skills: [
      { name: "React 18", projectIds: ["convera", "resumatch", "vyra", "netwatch"] },
      { name: "TypeScript (React)", projectIds: ["convera", "resumatch"] },
      { name: "Vite", projectIds: ["convera", "resumatch", "vyra"] },
      { name: "Tailwind CSS", projectIds: ["convera", "resumatch", "vyra", "netwatch"] },
      { name: "Framer Motion", projectIds: ["resumatch", "portfolio"] },
      { name: "HTML5 & Semantic Web", projectIds: ["convera", "resumatch"] },
      { name: "CSS3 / Modern CSS", projectIds: ["convera", "resumatch"] }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "API architecture, service layer orchestration, and server-side runtime services.",
    skills: [
      { name: "FastAPI", projectIds: ["nexora", "vyra", "borderpulse"] },
      { name: "Node.js", projectIds: ["netwatch"] },
      { name: "Express", projectIds: ["netwatch"] },
      { name: "RESTful APIs", projectIds: ["nexora", "vyra", "netwatch"] },
      { name: "Pydantic Schemas", projectIds: ["nexora", "vyra"] }
    ]
  },
  {
    id: "databases",
    title: "Databases & Cloud Storage",
    description: "Relational, document, and timeseries persistence layers with cloud hosting.",
    skills: [
      { name: "PostgreSQL", projectIds: ["convera"] },
      { name: "Supabase", projectIds: ["convera", "borderpulse"] },
      { name: "MongoDB Atlas", projectIds: ["netwatch"] },
      { name: "Mongoose ODM", projectIds: ["netwatch"] },
      { name: "Firebase Firestore", projectIds: ["amuseme"] }
    ]
  },
  {
    id: "ai",
    title: "Artificial Intelligence & NLP",
    description: "Machine learning heuristics, natural language term extraction, and computer vision.",
    skills: [
      { name: "Scikit-learn", projectIds: ["nexora", "vyra"] },
      { name: "NLP & TF-IDF", projectIds: ["resumatch", "vyra", "nexora"] },
      { name: "Cosine Similarity Matching", projectIds: ["resumatch"] },
      { name: "Rule-Based Heuristic Classifiers", projectIds: ["nexora"] },
      { name: "Computer Vision & YOLO", projectIds: ["borderpulse", "cropweed"] }
    ]
  },
  {
    id: "cs",
    title: "Computer Science Fundamentals",
    description: "Core academic foundational pillars studied rigorously at SVCE.",
    skills: [
      { name: "Data Structures & Algorithms", projectIds: ["library", "convera"] },
      { name: "Database Management Systems (DBMS)", projectIds: ["convera", "netwatch"] },
      { name: "Computer Networks & Telemetry", projectIds: ["netwatch"] },
      { name: "Object-Oriented Programming (OOP)", projectIds: ["library", "convera"] },
      { name: "Operating Systems Principles", projectIds: ["library"] }
    ]
  },
  {
    id: "design",
    title: "Design & Prototyping",
    description: "Visual identity, typography systems, vector craft, and layout art direction.",
    skills: [
      { name: "Brand Identity Design", projectIds: ["offscript", "velora", "qcic-logo"] },
      { name: "Typography & Hierarchy", projectIds: ["offscript", "velora", "gandhi-jayanti"] },
      { name: "Figma (UI/UX)", projectIds: ["convera", "uiux-intern"] },
      { name: "Canva Studio & Editorial Layout", projectIds: ["offscript", "mission-find-nemo", "sttp-certificate"] },
      { name: "Vector Asset Illustration", projectIds: ["offscript", "qcic-logo"] }
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Workflow",
    description: "Tooling, testing suites, version control, and deployment pipelines.",
    skills: [
      { name: "Git & GitHub", projectIds: ["convera", "nexora", "resumatch", "vyra", "netwatch"] },
      { name: "Vitest (Unit Testing)", projectIds: ["convera"] },
      { name: "Vercel Edge Deployment", projectIds: ["resumatch", "portfolio"] },
      { name: "VS Code", projectIds: ["convera", "portfolio"] },
      { name: "Postman API Testing", projectIds: ["nexora", "netwatch"] }
    ]
  }
];

export const SKILLS = {
  programming: ["Python", "TypeScript", "Java", "C", "C++", "SQL"],
  webFrontend: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  backendDatabases: ["FastAPI", "Node.js", "Express", "REST APIs", "PostgreSQL", "Supabase", "MongoDB Atlas", "Firebase"],
  aiData: ["Machine Learning", "NLP", "Scikit-learn", "TF-IDF Vectorization", "Cosine Similarity", "Computer Vision", "YOLO"],
  tools: ["Git", "GitHub", "VS Code", "Vitest", "Vercel", "Figma", "Canva", "Postman"],
  coreCS: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems"],
  softSkills: ["Cross-Disciplinary Thinking", "Problem-solving", "Team Leadership", "Editorial Communication", "Design Direction"],
  researchInterests: ["Quantum Computing", "Quantum Machine Learning", "Explainable AI", "Autonomous Agents", "Hybrid Quantum-Classical Workflows"]
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
    name: "Foundations of User Experience (UX) Design",
    provider: "Google / Coursera",
    date: "Verified",
    credentialId: null,
    badge: "Design"
  },
  {
    name: "Python for Data Science and AI",
    provider: "IBM",
    date: "Verified",
    credentialId: null,
    badge: "Data Science"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Hackathon Dual Selection · SIH 2026",
    project: "CONVERA & NEXORA",
    details: "Selected across two distinct Smart India Hackathon 2026 project submissions for AICTE and Cybersecurity challenges."
  },
  {
    title: "Club Design Leadership",
    project: "QCIC · SVCE",
    details: "Appointed Design Lead for the Quantum Computing and Intelligence Club, steering brand identity, certificate accreditation series, and visual communications."
  },
  {
    title: "Production Application Deployment",
    project: "ResuMatch AI",
    details: "Successfully engineered and deployed an interactive client-side ATS analysis tool live on the Vercel Edge Network."
  },
  {
    title: "Creator Brand Publication",
    project: "OFFSCRIPT & VÉLORA",
    details: "Conceived and published complete visual identity systems and packaging case studies on Behance with multi-platform asset kits."
  }
];
