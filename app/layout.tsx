import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Header"
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krack-AI | Real-Time AI Interview Assistant",
  description:
    "Ace your next interview with Krack-AI. Get real-time AI-powered interview answers, coding assistance, live transcription, interview guidance, and personalized support during technical interviews.",
  keywords: [
    "AI Interview Assistant",
    "Interview Copilot",
    "Coding Interview AI",
    "Technical Interview Preparation",
    "Interview Questions and Answers",
    "Software Engineer Interview",
    "React Interview Questions",
    "JavaScript Interview Questions",
    "Frontend Interview Preparation",
    "AI Coding Assistant",
    "Krack-AI",
  ],
  authors: [
    {
      name: "Krack-AI",
    },
  ],
  creator: "Krack-AI",
  publisher: "Krack-AI",
  metadataBase: new URL("https://krack-ai.com"),
  openGraph: {
    title: "Krack-AI | Real-Time AI Interview Assistant",
    description:
      "Get real-time AI support during interviews. Live transcription, coding help, interview guidance, and personalized AI answers.",
    url: "https://krack-ai.com",
    siteName: "Krack-AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krack-AI | Real-Time AI Interview Assistant",
    description:
      "Real-time AI interview copilot for coding interviews, technical rounds, and job seekers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <NavBar />
        {children}
      <Footer />  
      </body>
    </html>
  );
}
