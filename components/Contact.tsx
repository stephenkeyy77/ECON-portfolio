import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "stephenkeyy77@gmail.com",
    href: "mailto:stephenkeyy77@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yunyu-ke-357994290",
    href: "https://www.linkedin.com/in/yunyu-ke-357994290/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/stephenkeyy77",
    href: "https://github.com/stephenkeyy77",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Boston, MA",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-fade py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3 text-muted-foreground text-sm max-w-md">
            Open to full-time opportunities in finance, data science, and
            quantitative research. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {links.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div
                className="flex items-center gap-4 p-5 rounded-xl border border-card-border bg-card
                  transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5
                  hover:-translate-y-0.5 group"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center
                    group-hover:bg-accent/10 transition-colors shrink-0"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-foreground font-medium truncate">
                    {value}
                  </p>
                </div>
              </div>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        <div
          className="mt-12 p-8 rounded-2xl border border-accent/20 bg-gradient-to-br
            from-accent/5 to-transparent max-w-2xl"
        >
          <h3 className="text-lg font-semibold mb-2">Let&apos;s connect</h3>
          <p className="text-sm text-muted-foreground mb-5">
            Whether it&apos;s about investment research, a data science project,
            or a potential role — I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:stephenkeyy77@gmail.com"
            className="inline-flex px-5 py-2.5 rounded-lg bg-accent text-accent-foreground
              text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
