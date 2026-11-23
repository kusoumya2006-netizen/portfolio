export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  githubUsername: string;
  resume: string;
  resumeAlt: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  period: string;
  academicStage: string;
  cgpa: string;
  academicFocus: string[];
}

export interface Profile {
  name: string;
  fullName: string;
  tagline: string;
  headline1: string;
  headline2: string;
  subtitle: string;
  bio: string;
  coreManifesto: string;
  aboutHeadline: string;
  aboutBio: string;
  personalQuote: string;
  secondaryQuote: string;
  closingQuote: string;
  education: EducationInfo;
  contact: ContactInfo;
  interests: string[];
  humanInterests: string[];
}

export interface CaseStudyData {
  overview?: string;
  context?: string;
  problemStatement?: string;
  objectives?: string[];
  researchAndExploration?: string;
  conceptDevelopment?: string;
  architectureOrProcess?: {
    summary?: string;
    diagramDescription?: string;
    modules?: { name: string; description: string; tech?: string }[];
  };
  toolsAndTechnologies?: { category: string; items: string[] }[];
  implementationDetails?: string[];
  individualContribution?: string[];
  challenges?: string[];
  decisionsAndTradeoffs?: { decision: string; rationale: string; impact?: string }[];
  finalOutcome?: string;
  learnings?: string[];
  links?: { label: string; url: string; type: 'github' | 'demo' | 'behance' | 'canva' | 'external' }[];
}

export interface DesignCaseStudyData {
  creativeBrief?: string;
  designObjective?: string;
  targetAudience?: string;
  conceptDevelopment?: string;
  typographySystem?: { role: string; font: string; usage: string }[];
  colorPalette?: { name: string; hex: string; role: string }[];
  visualLanguage?: string;
  execution?: string[];
  finalApplications?: string[];
  behanceUrl?: string;
  canvaUrl?: string;
}

export type ProjectStatus = 'COMPLETED' | 'ONGOING' | 'PROTOTYPE' | 'EXPERIMENTAL' | 'ACADEMIC';
export type ProjectDiscipline =
  | 'ENGINEERING'
  | 'ARTIFICIAL INTELLIGENCE'
  | 'DESIGN AND BRAND IDENTITY'
  | 'CREATIVE TECHNOLOGY';
export type ProjectClassification = 'Flagship' | 'Secondary' | 'Academic' | 'Exploratory' | 'Brand Identity';

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
  status?: ProjectStatus;
  discipline?: ProjectDiscipline;
  classification?: ProjectClassification;
  originality?: string;
  teamOrSolo?: 'Individual' | 'Team';
  github?: string | null;
  demo?: string | null;
  metrics?: string;
  featured: boolean;
  accentColor: string;
  image?: string;
  caseStudy?: CaseStudyData;
}

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
  gallery?: { label: string; url: string }[];
  brandMessage?: string;
  behanceUrl?: string | null;
  caseStudy?: DesignCaseStudyData;
}

export interface JourneyItem {
  id: string;
  year: string;
  period: string;
  title: string;
  org: string;
  type: string;
  details: string;
  tags: string[];
}

export interface CreativeFrequency {
  id: string;
  dimensionNumber: string;
  title: string;
  tag: string;
  summary: string;
  details: string;
  bullets: string[];
  iconName: string;
  featured?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
}
