"use client"
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Privacy from "@/components/Privacy";
import Hero from "@/components/Hero"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <Hero />
      <Features />
      <Privacy />
      <Pricing />
      <Footer />
    </main>
  );
}