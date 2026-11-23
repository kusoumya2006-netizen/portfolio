# SOUMYA KUMAR — PORTFOLIO AUDIT (V1 BASELINE)
*Date: November 2026 | Repository: https://github.com/kusoumya2006-netizen/portfolio*

---

## 1. Executive Summary

This audit assesses the codebase, visual design language, content architecture, and user experience of Soumya Kumar's personal portfolio. 

Soumya is a **Computer Science and Engineering undergraduate at Sri Venkateswara College of Engineering (SVCE, Class of 2028)** positioned as a **Creative Technologist**. Her work uniquely spans rigorous software engineering (offline translation, deepfake voice-cloning detection heuristics, ATS analysis, telemetry) and studio-grade brand identity/creative direction (OFFSCRIPT, VÉLORA, QCIC, institutional visual campaigns).

---

## 2. Technical Stack & Architecture Assessment

| Layer | Current Technology | Health Status | Observations |
|---|---|---|---|
| **Framework** | React 18.3.1 + TypeScript | Healthy | Strong typing, zero build warnings, quick Vite compile. |
| **Build & Tooling** | Vite 5.4.21 + PostCSS + Tailwind | Healthy | Fast HMR, ~2.1s production bundling, clean tree-shaking. |
| **Animation** | Framer Motion 11.5.4 | Needs Restraint | Rich capability, but some repeated floating/orbital loops clutter the editorial focus. |
| **Icons** | Lucide React 0.441.0 | Healthy | Crisp vector rendering, well-aligned with monospace telemetry. |
| **Routing** | React Router DOM 6.26.2 | Needs Expansion | Currently routes mostly fall back to anchor jumps on `/` with a basic `ProjectDetailPage.tsx`. Needs a unified, full-featured case study router. |
| **Design Tokens** | Tailwind custom theme (`src/constants/theme.ts`) | Good Baseline | Color tokens defined, but sections are uniformly ultra-dark `#0E1613`. Needs intentional light/dark contrast rhythm. |

---

## 3. Section-by-Section Critical Audit

### 01. Hero & Onboarding
- **Strengths**: Custom vector SK monogram logo, responsive typography, clear SVCE credential badge.
- **Deficiencies**: The fullscreen `GrandEntrance` modal can feel like a barrier on repeat visits if not seamlessly integrated. The layout relies heavily on dark glass cards.
- **V2 Opportunity**: Elevate the Hero into an art-directed Swiss/editorial masthead. Integrate the SK monogram as an architectural signature directly into the grid. Clear primary CTA (*Explore Selected Work*) and secondary CTA (*Download Resume*).

### 02. Engineering Works (`WorksSection.tsx`)
- **Strengths**: Real project data (CONVERA, NEXORA, ResuMatch AI, VYRA, NetWatch), verified GitHub links, dynamic filter badges.
- **Deficiencies**: Cards use a uniform 3-column card grid that looks template-driven. It doesn't feature OFFSCRIPT as a cross-disciplinary bridge.
- **V2 Opportunity**: Transform into a curated **Selected Works** exhibition featuring 6 landmark projects (CONVERA, NEXORA, VYRA, ResuMatch AI, NetWatch, OFFSCRIPT) with asymmetric, editorial layouts, custom visual assets, problem statements, and direct links to comprehensive case studies.

### 03. Project Case Studies (`ProjectDetailPage.tsx`)
- **Strengths**: Clean route setup `/works/:id`, basic detail fields.
- **Deficiencies**: Layout is generic and lacks technical diagrams, system workflows, trade-offs, architecture decisions, and creative process breakdowns.
- **V2 Opportunity**: Build a dedicated, reusable **Case Study Architecture** that supports both technical deep dives (architecture, modules, detection heuristics, test suite) and visual design breakdowns (creative brief, typography, color system, packaging specs).

### 04. Design Archive (`DesignSection.tsx`)
- **Strengths**: Real authentic Canva/Behance assets (OFFSCRIPT, VÉLORA, Mission Nemo, STTP, Gandhi Jayanti), interactive lightbox with multi-asset switcher.
- **Deficiencies**: Lacks deep creative narrative explaining the *why*—the creative brief, target audience, typography choices, and execution philosophy.
- **V2 Opportunity**: Structure each brand identity into an editorial exhibition with structured case studies, creative briefs, font pairings, color swatches, and live Behance/Canva links.

### 05. Experience & Leadership (`JourneySection.tsx`)
- **Strengths**: Chronological timeline, category filters, verified experiences (QCIC Design Lead, CyberNova Design Team, SIH, internships).
- **Deficiencies**: Plain vertical line with repetitive cards. Doesn't highlight key outcomes and leadership decisions clearly.
- **V2 Opportunity**: Redesign into an editorial resume timeline with typography-driven hierarchy, clear delineation of responsibilities, verified outcomes, and institutional context.

### 06. Technical Constellation (`SkillsSection.tsx`)
- **Strengths**: Domain filter tabs, categorised competencies, verified certifications.
- **Deficiencies**: Skills feel detached from projects.
- **V2 Opportunity**: Connect key technical skills directly to the projects where they were proven (e.g. FastAPI ➔ NEXORA, React/TypeScript ➔ CONVERA, Python/NLP ➔ VYRA, Vector Design ➔ OFFSCRIPT).

### 07. Beyond the Screen (`BeyondTheCodeSection.tsx`)
- **Strengths**: Dedicated focus on Brand Building, Creative Writing, Content Creation, and Music. Custom Bitmoji integration.
- **Deficiencies**: The section is slightly oversized compared to the core technical sections.
- **V2 Opportunity**: Tighten into a refined, high-end editorial showcase of creative dimensions that distinguish Soumya as a holistic thinker without overshadowing her engineering rigor.

### 08. Academic Foundations (`EngineeringBackgroundSection.tsx`)
- **Strengths**: Accurate CGPA (7.2), SVCE degree details, core CS coursework badges.
- **Deficiencies**: Separated from the About section, creating fragmented narrative flow.
- **V2 Opportunity**: Merge into a cohesive, art-directed **About & Academic Foundations** chapter that explains her journey at the intersection of technology and design.

### 09. Contact (`ContactSection.tsx`) & Footer
- **Strengths**: Functional mailto form, clipboard copy buttons for email/phone, verified social links, resume download.
- **Deficiencies**: Form looks slightly generic; needs tighter typographic restraint and clear agency-grade styling.
- **V2 Opportunity**: Polish into a crisp, authoritative closing statement with direct, functional contact channels.

---

## 4. Performance, Accessibility & Code Quality

- **Accessibility**: Skip-to-content link exists. Need to ensure contrast ratios across all new light/dark contrasting sections meet WCAG 2.1 AA.
- **Layout Shifts**: Zero CLS currently; keep explicit aspect ratios for all image containers.
- **Asset Integrity**: All user-provided images (`public/images/designs/offscript/*`, `public/images/designs/velora/*`, `public/assets/design/*`, `public/images/bitmoji.png`) are verified and preserved.
