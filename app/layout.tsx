import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AccessDev Transition Helper — Smooth Career Transition for Developers Going Blind",
  description: "Curated learning paths, tool recommendations, and mentorship matching for developers transitioning to accessible coding workflows."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7fab55b7-2188-4c23-b0f2-c05cba3ad456"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
