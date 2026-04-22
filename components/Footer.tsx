export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Yunyu Ke
        </p>
        <p className="text-xs text-muted-foreground">
          Economics &amp; Finance · Northeastern University
        </p>
      </div>
    </footer>
  );
}
