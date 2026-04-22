import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yunyu Ke — Finance & Economics Portfolio",
  description:
    "Finance & Economics graduate (May 2026) from Northeastern's D'Amore-McKim School of Business. Co-op experience in corporate tax at American Tower and Wellington Management. Seeking roles in equity research, asset management, and investment analysis.",
  keywords: ["portfolio", "economics", "finance", "tax", "equity research", "asset management", "Python", "Excel"],
  authors: [{ name: "Yunyu Ke" }],
  openGraph: {
    title: "Yunyu Ke — Finance & Economics Portfolio",
    description:
      "Finance & Economics graduate (May 2026) from Northeastern's D'Amore-McKim School of Business. Co-op experience in corporate tax at American Tower and Wellington Management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
