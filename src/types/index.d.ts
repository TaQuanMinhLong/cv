export type ContactTypes = {
  label: string;
  content: string;
  href?: string;
  icon: string;
};

export type EducationTypes = {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type ExperienceTypes = {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type SkillTypes = {
  label: string;
  value: number;
};

export type TechTypes = {
  label: string;
  techs: {
    icon: string;
    href: string;
  }[];
};
