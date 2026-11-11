import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axivy Audit Pro | Free Business Audit",
  description: "Find the online issues costing your business customers.",
  applicationName: "Axivy Audit Pro",
  keywords: ["business audit", "website audit", "conversion audit", "Axivy"],
  openGraph: {
    title: "Axivy Audit Pro | Free Business Audit",
    description: "Find the online issues costing your business customers.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
