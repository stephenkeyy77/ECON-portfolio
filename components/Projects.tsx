import { Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  highlight?: boolean;
};

const projects: Project[] = [
  {
    title: "Clustering World Economies with K-Means & PCA",
    description:
      "Downloaded 10 World Bank development indicators for ~160 countries, standardized features, and applied K-Means clustering (K=4) to group economies. Used PCA for 2D visualization, evaluated optimal K with elbow method and silhouette analysis, and compared algorithmic clusters against World Bank income classifications.",
    tags: ["Python", "scikit-learn", "wbgapi", "PCA", "K-Means"],
    github: "https://github.com/stephenkeyy77/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2022",
  },
  {
    title: "FedSpeak NLP: Sentiment Analysis of FOMC Minutes",
    description:
      "Preprocessed FOMC meeting minutes using tokenization, lemmatization, and stop word removal. Built a TF-IDF document-term matrix and computed Loughran-McDonald financial sentiment scores. Visualized sentiment trends across key events (2008 crisis, COVID, 2022 tightening) and clustered documents with K-Means to discover distinct language regimes in Fed communications.",
    tags: ["Python", "scikit-learn", "NLTK", "TF-IDF", "NLP"],
    github: "https://github.com/stephenkeyy77/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2023",
    highlight: true,
  },
  {
    title: "Causal ML: Double Machine Learning for 401(k) Effects",
    description:
      "Demonstrated regularization bias in LASSO for causal estimation, then applied Double Machine Learning (Partially Linear Regression) with Random Forest nuisance learners to estimate the causal effect of 401(k) eligibility on net financial assets. Analyzed heterogeneous treatment effects across income quartiles.",
    tags: ["Python", "DoubleML", "scikit-learn", "Random Forest"],
    github: "https://github.com/stephenkeyy77/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2024",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group flex flex-col rounded-xl p-6 border transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        ${
          project.highlight
            ? "border-accent/30 bg-card shadow-lg shadow-accent/5 hover:shadow-accent/10"
            : "border-card-border bg-card hover:border-accent/20"
        }`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-2 ml-4 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs font-mono
              bg-muted text-muted-foreground border border-card-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-fade py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="text-3xl font-semibold text-foreground">Projects</h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-md">
            Data science and quantitative finance projects applying machine
            learning to real financial problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
