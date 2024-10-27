import { main } from "framer-motion/client";
import HeroSection from "@/components/herosection";
import FeaturedCourses from "@/components/featuredCourses";


export default function Home() {
    return (
      <main className="min-h-screen h-64 scrollbar-thin
        border-white antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourses />
      </main>
    );
  }
  