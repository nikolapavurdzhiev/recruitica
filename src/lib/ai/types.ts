export interface AIMatchScore {
  score: number;
  reasons: string[];
}

export interface AIJobMatch {
  jobId: string;
  candidateId: string;
  matchScore: AIMatchScore;
  recommendations: string[];
}

export interface AISkillsAnalysis {
  identified: string[];
  missing: string[];
  recommendations: string[];
}

export interface AIProfileAnalysis {
  skills: AISkillsAnalysis;
  experience: {
    years: number;
    relevance: number;
    gaps: string[];
  };
  cultureFit: {
    score: number;
    strengths: string[];
    areas: string[];
  };
}