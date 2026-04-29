export type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  url: string;
};

// Most recent first.
export const publications: Publication[] = [
  {
    year: 2026,
    title: "Next-Gen Restaurant Recommendation with Generative Modeling and Real-Time Features",
    authors: "Chen, Y., Chen, P., Patel, N., Suresh, S., & Ling, B.",
    venue: "Uber Engineering Blog",
    url: "https://www.uber.com/us/en/blog/next-gen-restaurant-recommendation/",
  },
  {
    year: 2021,
    title: "Counterfactual Evaluation Policy for Machine Learning Models",
    authors: "Suresh, S.",
    venue: "Towards Data Science",
    url: "https://medium.com/data-science/counterfactual-evaluation-policy-for-machine-learning-models-f58acba19647",
  },
  {
    year: 2021,
    title: "Interpreting CNN Models",
    authors: "Suresh, S.",
    venue: "Towards Data Science",
    url: "https://medium.com/data-science/interpreting-cnn-models-a11b1f720097",
  },
  {
    year: 2020,
    title: "Image Classification Baseline Model For 2020",
    authors: "Suresh, S.",
    venue: "Towards Data Science",
    url: "https://medium.com/data-science/image-classification-baseline-model-for-2020-1d33f0986fc0",
  },
  {
    year: 2020,
    title: "From Correlation to Causation",
    authors: "Suresh, S.",
    venue: "Towards Data Science",
    url: "https://medium.com/data-science/from-correlation-to-causation-49f566eea954",
  },
];
