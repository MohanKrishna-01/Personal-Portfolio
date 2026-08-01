import { lazy, Suspense, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import ProgressBar from "@/components/ProgressBar";
import CommandPalette from "@/components/CommandPalette";

const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Timeline = lazy(() => import("@/components/Timeline"));
const GithubStats = lazy(() => import("@/components/GithubStats"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Insights = lazy(() => import("@/components/Insights"));
const Services = lazy(() => import("@/components/Services"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden="true" />;

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <PageLoader />
      <ProgressBar />
      <CommandPalette />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="min-h-dvh">
        <Navigation />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Suspense fallback={<SectionFallback />}>
            <Experience />
            <Projects />
            <Timeline />
            <GithubStats />
            <Certifications />
            <Insights />
            <Services />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;