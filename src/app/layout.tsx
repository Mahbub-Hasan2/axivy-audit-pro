import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axivy Audit Pro | Free Business Audit",
  description: "Find the online issues costing your business customers.",
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
