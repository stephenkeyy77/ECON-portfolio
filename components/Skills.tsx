"use client";

import { useEffect, useRef } from "react";

type Skill = { name: string; level: number };
type Category = { label: string; skills: Skill[] };

const categories: Category[] = [
  {
    label: "Languages & Data",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 80 },
      { name: "Excel / VBA", level: 85 },
      { name: "R", level: 65 },
    ],
  },
  {
    label: "ML & Statistics",
    skills: [
      { name: "scikit-learn", level: 88 },
      { name: "statsmodels", level: 80 },
      { name: "NumPy / SciPy", level: 85 },
      { name: "XGBoost", level: 72 },
    ],
  },
  {
    label: "Data & Visualization",
    skills: [
      { name: "pandas", level: 92 },
      { name: "Plotly", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Bloomberg API", level: 70 },
    ],
  },
  {
    label: "Finance & Tools",
    skills: [
      { name: "Financial Modeling", level: 88 },
      { name: "Portfolio Construction", level: 82 },
      { name: "Equity Research", level: 85 },
      { name: "Git", level: 78 },
    ],
  },
];

function SkillBar({ name, level }: Skill) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${level}%`;
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-foreground font-medium">{name}</span>
        <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-accent to-[hsl(280,55%,65%)] rounded-full
            transition-all duration-1000 ease-out"
          style={{ width: 0 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-fade py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Toolkit
          </p>
          <h2 className="text-3xl font-semibold text-foreground">Skills</h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-md">
            A blend of quantitative methods, financial domain knowledge, and
            engineering tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-5 border-b border-card-border pb-2">
                {cat.label}
              </h3>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
