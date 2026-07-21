export type MediaItem = {
  year: number;
  title: string;
  show: string;
  detail?: string;
  url: string;
};

// Most recent first. Podcast and other media appearances; talks live in talks.ts.
export const media: MediaItem[] = [
  {
    year: 2026,
    title: "Next-Gen Restaurant Recommendation on Uber Eats",
    show: "AI Engineering Show",
    detail: "Episode 5 · YouTube",
    url: "https://www.youtube.com/watch?v=w4TdNoX8ZS0",
  },
];
