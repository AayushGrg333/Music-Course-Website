import { main } from "framer-motion/client";
import HeroSection from "@/components/herosection";
import FeaturedCourses from "@/components/featuredCourses";
import WhyChooseUs from "@/components/whyChooseUs";
import TestimoialCards from "@/components/infiniteSection"
import UpcomingWebinars from "@/components/upcomingWebinars";

export default function Home() {
    return (
      <main className="min-h-screen h-64 scrollbar-thin
        border-white antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimoialCards />
        <UpcomingWebinars />
      </main>
    );
  }
  