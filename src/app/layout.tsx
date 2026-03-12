import type { Metadata } from "next";
import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor"; // This was missing!

export const metadata: Metadata = {
  title: "Nithin N S | Portfolio",
  description: "Full-Stack Developer & Data Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative bg-[#050505] cursor-none">
        <CustomCursor /> {/* This was missing! */}
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}