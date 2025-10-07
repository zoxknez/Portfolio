import { useCallback, useEffect, useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { portfolioProjects } from './data/projects';
import { skills } from './data/skills';

const SECTIONS = [
  { id: 'hero', label: '✨ Početak' },
  { id: 'skills', label: '🛠️ Veštine' },
  { id: 'portfolio', label: '🚀 Projekti' },
  { id: 'contact', label: '📬 Kontakt' },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SECTIONS[0].id);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && SECTIONS.some((section) => section.id === hash)) {
      setActiveSection(hash as SectionId);
      requestAnimationFrame(() => {
        const target = document.getElementById(hash);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    if (!SECTIONS.some((section) => section.id === sectionId)) {
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (history.replaceState) {
      history.replaceState(null, '', `#${sectionId}`);
    } else {
      window.location.hash = sectionId;
    }

    setActiveSection(sectionId as SectionId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection((prev) => {
            const sectionId = visibleEntry.target.id as SectionId;
            return prev === sectionId ? prev : sectionId;
          });
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <BackgroundCanvas />

      <Nav sections={SECTIONS} activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="relative z-10">
        <Hero sectionId="hero" onNavigate={handleNavigate} isLoaded={isLoaded} />
        <Skills sectionId="skills" skills={skills} />
        <Portfolio sectionId="portfolio" projects={portfolioProjects} />
        <Contact sectionId="contact" />
      </main>

      <div className="fixed bottom-8 right-8 z-50 hidden flex-col gap-2 md:flex">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => handleNavigate(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                isActive ? 'bg-cyan-400 w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Idi na sekciju ${section.label}`}
              aria-current={isActive ? 'page' : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
