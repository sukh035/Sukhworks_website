import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Craft from '@/components/Craft';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const registerRef = (el: HTMLElement | null) => {
    if (el) {
      sectionRefs.current[el.id] = el;
    }
  };

  const scrollToSection = (section: string) => {
    if (section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = sectionRefs.current[section];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-sage-50">
      <Navbar onNavigate={scrollToSection} />
      <Hero onExplore={() => scrollToSection('gallery')} />
      <Gallery registerRef={registerRef} />
      <Craft registerRef={registerRef} />
      <About registerRef={registerRef} />
      <Contact registerRef={registerRef} />
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
