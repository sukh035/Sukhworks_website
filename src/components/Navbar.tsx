import { useEffect, useState } from 'react';
import { Menu, X, TreePine } from 'lucide-react';

type Props = {
  onNavigate: (section: string) => void;
};

export default function Navbar({ onNavigate }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Gallery', section: 'gallery' },
    { label: 'Craft', section: 'craft' },
    { label: 'About', section: 'about' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleNav = (section: string) => {
    onNavigate(section);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('hero')}
          className="flex items-center gap-2 group"
        >
          <TreePine
            className={`w-6 h-6 transition-colors duration-500 ${
              scrolled ? 'text-sage-700' : 'text-sage-50'
            }`}
          />
          <span
            className={`font-display text-xl tracking-wide transition-colors duration-500 ${
              scrolled ? 'text-sage-900' : 'text-sage-50'
            }`}
          >
            Sukh Works
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNav(item.section)}
              className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-sage-800 hover:text-sage-600' : 'text-sage-50/90 hover:text-sage-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className={`px-5 py-2 text-sm font-light tracking-wide rounded-full transition-colors duration-300 ${
              scrolled
                ? 'bg-sage-700 text-sage-50 hover:bg-sage-800'
                : 'bg-sage-50/15 backdrop-blur-sm text-sage-50 border border-sage-50/30 hover:bg-sage-50/25'
            }`}
          >
            Commission a Piece
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-sage-900' : 'text-sage-50'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-sage-900' : 'text-sage-50'}`} />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-ivory/98 backdrop-blur-md border-t border-sage-200 animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNav(item.section)}
                className="text-sage-800 text-base font-light tracking-wide text-left hover:text-sage-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-sage-700 text-sage-50 px-5 py-2.5 text-sm font-light tracking-wide rounded-full hover:bg-sage-800 transition-colors duration-300 text-center"
            >
              Commission a Piece
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
