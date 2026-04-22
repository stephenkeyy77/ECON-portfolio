"use client";

import { useState, useEffect, useCallback } from "react";
import { Github, ExternalLink, X, ZoomIn } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Clustering World Economies with K-Means & PCA",
    description:
      "Downloaded 10 World Bank development indicators for ~160 countries, standardized features, and applied K-Means clustering (K=4) to group economies. Used PCA for 2D visualization, evaluated optimal K with elbow method and silhouette analysis, and compared algorithmic clusters against World Bank income classifications.",
    tags: ["Python", "scikit-learn", "K-Means", "PCA", "wbgapi"],
    github:
      "https://github.com/stephenkeyy77/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2022",
    image: "/clustering-economies.png",
  },
  {
    title: "FedSpeak NLP: Sentiment Analysis of FOMC Minutes",
    description:
      "Preprocessed FOMC meeting minutes using tokenization, lemmatization, and stop word removal. Built a TF-IDF document-term matrix and computed Loughran-McDonald financial sentiment scores. Visualized sentiment trends across key events (2008 crisis, COVID, 2022 tightening) and clustered documents with K-Means to discover distinct language regimes in Fed communications.",
    tags: ["Python", "scikit-learn", "NLTK", "TF-IDF", "NLP"],
    github:
      "https://github.com/stephenkeyy77/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2023",
    image: "/fedspeak-sentiment.png",
  },
  {
    title: "Causal ML: Double Machine Learning for 401(k) Effects",
    description:
      "Demonstrated regularization bias in LASSO for causal estimation, then applied Double Machine Learning (Partially Linear Regression) with Random Forest nuisance learners to estimate the causal effect of 401(k) eligibility on net financial assets. Analyzed heterogeneous treatment effects across income quartiles.",
    tags: ["Python", "DoubleML", "scikit-learn", "Causal ML", "Random Forest"],
    github:
      "https://github.com/stephenkeyy77/ECON3916-Statistical-Machine-Learning/tree/main/Lab%2024",
    image: "/causal-dml-401k.png",
  },
];

const FILTERS = ["All", "Python", "scikit-learn", "NLP", "Causal ML"];

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-5xl rounded-2xl overflow-hidden
          bg-card border border-card-border shadow-2xl
          flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full
            bg-black/50 flex items-center justify-center
            text-white/80 hover:text-white hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Full-size image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-contain max-h-[70vh]"
        />

        {/* Caption */}
        <div className="px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2 max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono
                    bg-muted text-muted-foreground border border-card-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg
              bg-accent text-accent-foreground text-xs font-medium
              hover:opacity-90 transition-opacity"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────
function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="group relative rounded-xl overflow-hidden border border-card-border bg-card
      shadow-md hover:shadow-xl hover:border-accent/30 transition-all duration-300">

      {/* Thumbnail — click opens lightbox */}
      <div
        className="relative aspect-video w-full bg-muted overflow-hidden cursor-zoom-in"
        onClick={onOpen}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Zoom hint on hover */}
        <div className="absolute inset-0 flex items-center justify-center
          bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-90
            scale-75 group-hover:scale-100 transition-all duration-300" />
        </div>

        {/* Description overlay — slides up from bottom */}
        <div className="absolute inset-0 flex flex-col justify-end
          bg-gradient-to-t from-black/95 via-black/70 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          pointer-events-none">
          <div className="p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white/90 text-xs leading-relaxed line-clamp-3 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono
                    bg-white/10 text-white/80 border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Title bar */}
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2
          group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}

// ── Gallery ───────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      <section id="projects" className="section-fade py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
              Work
            </p>
            <h2 className="text-3xl font-semibold text-foreground">Data Projects</h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-md">
              Applied machine learning and causal inference to real financial and
              economic datasets. Hover a card to explore details, click to enlarge.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all duration-200
                  ${
                    active === f
                      ? "bg-accent text-accent-foreground border-accent shadow-md shadow-accent/20"
                      : "border-card-border text-muted-foreground hover:text-foreground hover:border-accent/40"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpen={() => setLightbox(project)}
              />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-muted-foreground text-sm py-16">
              No projects match this filter.
            </p>
          )}
        </div>
      </section>

      {lightbox && <Lightbox project={lightbox} onClose={closeLightbox} />}
    </>
  );
}
