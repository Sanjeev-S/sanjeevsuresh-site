export type EventEntry = {
  month: string;
  year: number;
  title: string;
  role: string;
  city: string;
  venue?: string;
  note?: string;
  url: string;
};

// Most recent first. Community events you co-hosted (Luma Hosted By).
export const events: EventEntry[] = [
  {
    month: "Aug",
    year: 2026,
    title: "Enterprise MCP Lightning Talks",
    role: "Co-host",
    city: "San Francisco",
    venue: "Workato AI Hub",
    note: "In collaboration with Agentic AI Foundation",
    url: "https://luma.com/w3ckeuj7",
  },
  {
    month: "Jul",
    year: 2026,
    title: "MCP Graduation Party",
    role: "Co-host",
    city: "San Francisco",
    venue: "Arcade.dev & partners",
    note: "MCP 2026-07-28 spec graduation",
    url: "https://luma.com/ugfl1mn2",
  },
];
