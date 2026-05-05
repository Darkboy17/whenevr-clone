import SmoothScroll from "../components/layout/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whenevr Clone",
  description: "Pixel-focused Next.js clone of the Whenevr Framer landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
