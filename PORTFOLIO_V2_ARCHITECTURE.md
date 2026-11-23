# SOUMYA KUMAR — PORTFOLIO V2 SYSTEM ARCHITECTURE
*A Complete Professional Identity, Work Archive & Creative Technology Platform*

---

## 1. Professional Positioning & Dual Discovery Pathways

### Primary Positioning
**CREATIVE TECHNOLOGIST**
*"I combine engineering logic with creative instinct to build meaningful digital experiences."*

### Dual Discovery Pathways
Recruiters and visitors have two deliberate, high-conviction pathways that diverge on the homepage and converge in Soumya's unified identity:

```
                            [ SOUMYA KUMAR ]
                       CREATIVE TECHNOLOGIST (SVCE)
                                    |
          +-------------------------+-------------------------+
          |                                                   |
      [ PATH A: ENGINEERING ]                            [ PATH B: CREATIVE ]
          |                                                   |
  • Distributed Systems & Telemetry                   • Creator Brand Systems
  • AI Threat Heuristics & Explainability             • Editorial & Swiss Typography
  • Full-Stack Architecture & TypeScript              • Packaging & Visual Direction
  • Heuristic State Machines (CONVERA)                • Vector Art & Character Design
  • Multi-Agent Systems (NEXORA)                      • Campaign Identity (Mission Nemo)
          |                                                   |
          +-------------------------+-------------------------+
                                    |
                      [ UNIFIED IDENTITY & ARCHIVE ]
                  Project Atlas · Timeline · Evidence Base
```

- **Pathway A (Engineering)**: Connects visitors directly to system architectures, deterministic algorithms, Python/FastAPI microservices, test suites, and GitHub repositories.
- **Pathway B (Creative)**: Connects visitors directly to typographic pacing, brand identity guidelines, color theory, packaging direction, and verified Behance project showcases.

---

## 2. Comprehensive 14-Section Information Architecture

The portfolio implements a coherent, non-redundant structure across 14 areas:

| Step | Section Name | ID | Primary Role | Key Content & Artifacts |
|---|---|---|---|---|
| **01** | Identity / Hero | `#hero` | First-impression value proposition | Editorial masthead, SK signature monogram, primary CTAs (*Explore Selected Work*, *Download Resume*), quick links to GitHub & LinkedIn. |
| **02** | Dual Pathway Switcher | `#pathways` | Interactive orientation | One-click filter allowing recruiters to explore either Engineering Architecture or Creative Design, or view the complete spectrum. |
| **03** | Selected Work | `#selected` | Curated flagship exhibition | Asymmetric cards featuring the top 4 flagship works (CONVERA, OFFSCRIPT, NEXORA, VÉLORA) with problem, architecture, and live links. |
| **04** | Project Atlas | `#atlas` | Complete interactive directory | Filterable by Discipline (Engineering vs. Creative), Technology (React, Python, TypeScript, Canva, etc.), and Project Status (Completed, Prototype, Academic). Searchable by name. |
| **05** | Engineering Deep Dives | `/works/:id` | 15-part technical case studies | Comprehensive technical documentation for CONVERA, NEXORA, VYRA, ResuMatch AI, and NetWatch with ASCII architecture diagrams, module breakdown, test coverage, challenges, and trade-offs. |
| **06** | Design & Brand Archive | `#design` | Visual-first design exhibition | High-resolution artwork gallery for OFFSCRIPT, VÉLORA, Mission: Find Nemo, QCIC Logo, Gandhi Jayanti, and STTP Certificate with Behance links and lightbox previews. |
| **07** | Creative Case Studies | `/works/:id` | Brand design systems | Structured creative case studies detailing Creative Brief, Target Audience, Typography Pairings, Hex Color Swatches, and Visual Language. |
| **08** | Experience & Timeline | `#journey` | Editorial career progression | Chronological timeline covering QCIC Design Lead, CyberNova Design Team, internships, hackathon milestones, and academic leadership. |
| **09** | Technical Constellation | `#skills` | Verified capability matrix | 8 domains mapped directly to the projects where technologies were applied (Python ➔ NEXORA, React ➔ CONVERA, Node.js ➔ NetWatch). |
| **10** | Creative Practice | `#beyond-the-code` | Personal creative pursuits | Four distinct creative frequencies: Brand Building & Marketing, Creative Writing, Content Creation, and Music (inspiration only, zero fake players) + custom Bitmoji portrait. |
| **11** | Education & Background | `#about` | Academic credentials & narrative | SVCE CSE Class of 2028 (CGPA 7.2), engineering mindset meets artistic instinct, sculptural monogram installation. |
| **12** | Credentials & Certifications | `#credentials` | Verified academic proofs | Coursera/Univ. of Michigan Python, web development credentials, issuer verification IDs. |
| **13** | Achievements & Hackathons | `#achievements` | Evaluated milestones | SIH 2026 internal selections, campus club milestones, open-source repositories. |
| **14** | Contact & Closure | `#contact` | Actionable recruiter communication | Direct email (`kusoumya2006@gmail.com`), phone, verified LinkedIn, GitHub, resume download, and contact form. |

---

## 3. Visual Design System & Palette Tokens

### Color Palette
- **Deep Pine (`#0E1613`)**: Primary atmospheric background, evoking dark slate, obsidian terminal screens, and architectural depth.
- **Champagne Ivory (`#F4EDE4`)**: Primary high-contrast editorial text and warm canvas surface for creative cards.
- **Muted Sage (`#9BB0A5` / `#9AA58B`)**: Technical accent, active status beacons, border highlights, and terminal telemetry.
- **Brushed Metallic Silver (`#C5D1C9` / `#B5B5AD`)**: Refined borders, orbital rings, and monogram insignia.

### Typography Hierarchy
- **Editorial Display Serif**: `font-serif` (DM Serif Display / Georgia) for bold editorial headlines, conceptual statements, and literary titles.
- **Geometric / Neo-Grotesque Sans**: `font-sans` (Inter) for legible body paragraphs, metadata, and structured UI components.
- **Technical Monospace**: `font-mono` (JetBrains Mono / Courier) for system metrics, status tags, coordinate stamps, and code snippets.

---

## 4. Component Structure & Data Separation

```
src/
├── types/
│   └── portfolio.ts           # Strict TypeScript contracts for Projects, Case Studies, Design Works
├── data/
│   └── portfolio.ts           # Single source of truth (content separated from presentation)
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx     # Responsive navbar with progress indicator & anchor links
│   │   ├── Footer.tsx         # Architectural closing footer with copyright & links
│   │   └── GrandEntrance.tsx  # Optional cinematic intro with skip/replay
│   ├── sections/
│   │   ├── HeroSection.tsx    # Editorial masthead with dual pathway triggers
│   │   ├── ProjectAtlas.tsx   # Searchable, filterable interactive directory
│   │   ├── WorksSection.tsx   # Curated selected works exhibition
│   │   ├── DesignSection.tsx  # Visual-first design archive with lightbox
│   │   ├── JourneySection.tsx # Editorial experience & leadership timeline
│   │   ├── SkillsSection.tsx  # Project-mapped skill constellation & certs
│   │   ├── BeyondTheCodeSection.tsx # 4 creative frequencies & Bitmoji
│   │   ├── AboutSection.tsx   # Narrative & sculptural monogram installation
│   │   └── ContactSection.tsx # Functional contact forms & recruiter links
│   └── ui/
│       ├── SKMonogramLogo.tsx # Signature vector brand logo
│       └── CSEProcessorInsignia.tsx # Academic SVCE hardware badge
└── pages/
    ├── HomePage.tsx           # Assembled single-page experience
    └── ProjectDetailPage.tsx  # 15-part deep case study viewer
```
