export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  githubUrl?: string;
  status: 'live' | 'coming_soon' | 'repo_available';
  note?: string;
  codeSnippet?: string;
  terminalOutput?: string;
  type: 'web' | 'java' | 'other';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  initiative?: string;
  date: string;
  certificateId: string;
  verified: boolean;
  details?: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  status: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface HonorAward {
  id: string;
  title: string;
  description: string;
  event: string;
  year: string;
}

export interface HonorAwardItem {
  title: string;
  description: string;
  year: string;
}
