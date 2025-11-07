import type { Metadata } from "next";
import { Geist, Geist_Mono, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nextjs-Starter-Template",
  description: "Nextjs - Description",
  keywords: [
    "DatMai",
    "DatMV",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Next.js App Router",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "MongoDB",
    "MySQL",
    "SEO Optimization",
    "UI/UX Design",
    "Tailwind CSS",
    "Personal Website",
    "DatMai Portfolio",
    "Developer Portfolio",
    "Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ovo.variable} font-ovo antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
