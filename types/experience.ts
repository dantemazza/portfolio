export interface RoleProgression {
  current: {
    title: string;
    period: string;
    description?: string;
  };
  previous: {
    title: string;
    period: string;
    description?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string | RoleProgression;
  period: string;
  description: string;
  logo: string;
  website: string;
  type: 'full-time' | 'internship';
}
