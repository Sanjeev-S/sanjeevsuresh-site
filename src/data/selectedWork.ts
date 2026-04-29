export type WorkItem = {
  title: string;
  summary: string;
  url: string;
};

export const selectedWork: WorkItem[] = [
  {
    title: "Next-Generation Restaurant Recommendation",
    summary:
      "Uber Eats' migration from batch-aggregate features to sequence models with feature staleness cut to seconds.",
    url: "https://www.uber.com/us/en/blog/next-gen-restaurant-recommendation/",
  },
];
