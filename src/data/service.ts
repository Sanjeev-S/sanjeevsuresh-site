export type ServiceEntry = {
  year: number;
  role: string;
  organization: string;
  detail?: string;
  url?: string;
};

// Most recent first. Ambassador roles, program committees, judging, meetups.
export const service: ServiceEntry[] = [
  {
    year: 2026,
    role: "Ambassador",
    organization: "Agentic AI Foundation (AAIF)",
    detail: "Inaugural cohort · Linux Foundation",
    url: "https://aaif.io/ambassadors/",
  },
  {
    year: 2026,
    role: "Program Committee",
    organization: "RecSys 2026, Industry Track",
    url: "https://recsys.acm.org/recsys26/",
  },
  {
    year: 2026,
    role: "Program Committee",
    organization: "OARS Workshop @ RecSys 2026",
    url: "https://oars-workshop.github.io/",
  },
];
