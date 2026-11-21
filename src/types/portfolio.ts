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
